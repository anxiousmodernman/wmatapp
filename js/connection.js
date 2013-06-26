$(document).ready(function(){
	var api_key = 'f2fffd49cbac819ff5588b82bdeded43',
	    api_secret = '8f275cf7f9107eeb',
	    checkPopup,
	    popup,
	    token,
	    frob;

	window.rtm = new RememberTheMilk(api_key, api_secret, 'delete');

	rtm.get('rtm.auth.getFrob', function(resp){
		$('#auth').attr('disabled', null);
		frob = resp.rsp.frob;
	});

	$('#authBtn').click(function(){
		var authUrl = rtm.getAuthUrl(frob);
		popup = window.open(authUrl);

		checkPopup = setInterval(function(){
			if (popup.closed == true) {
				clearInterval(checkPopup);

				rtm.get('rtm.auth.getToken', {frob: frob}, function(resp){
					rtm.auth_token = resp.rsp.auth.token;

					loadLists();
				});
			}
		}, 200);
	})
});

var loadLists = function(){
	$('#auth').hide();

	rtm.get('rtm.lists.getList', function(resp){
		$.each(resp.rsp.lists.list, function(index, list){
			$('<button>').html(list.name).data({
				id: list.id
			}).addClass('list')
			.appendTo($('#lists'));
		});

		$('button.list').click(function(){
			$('#tasks').html('Loading...');
			var listId = $(this).data('id');

			rtm.get('rtm.tasks.getList', {list_id: listId, filter: 'status:incomplete'}, function(resp){
				$('#tasks').empty();

				if (!resp.rsp.tasks || !resp.rsp.tasks.list) {
					$('#tasks').html('No tasks!');
					return;
				}

				$.each(resp.rsp.tasks.list, function(index, listItem){
					if (Object.prototype.toString.call(listItem.taskseries) != '[object Array]') {
						listItem.taskseries = [listItem.taskseries];
					}

					$.each(listItem.taskseries, function(index, task){
						var div = $('<div>').addClass('task-div');
						$('<input>').attr('type', 'checkbox').appendTo(div);
						$('<span>').html(task.name).appendTo(div);

						div.appendTo($('#tasks'));
					})
				});
			})
		})
	});
}
