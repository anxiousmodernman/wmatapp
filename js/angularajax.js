// load initial data
$( "#mapPage" ).live( "pagebeforecreate", function(e){
	 loadDirections("Boston, MA", "New York, NY");
});

// on page initialization
$( "#mapPage" ).live( "pageinit", function(){
    $("#from,#to").bind( "change", function(event) {
        var from = $('#from').val();
        console.log("From: " + from);

        var to = $('#to').val();
        console.log("To: " + to);

        if ((from.length > 0) && (to.length > 0))
        {
           loadDirections(from, to);
        }

    });
})

function loadDirections(from, to) {

    var API_KEY = "mjtd%7Clu61200ynl%2Cas%3Do5-50ylq";
    var URL = "http://www.mapquestapi.com/directions/v1/route?key=" +
        API_KEY + "&from=" + encodeURIComponent(from) + "&to=" + encodeURIComponent(to);
    console.log(URL);

    $( "#mapList" ).html('');
    $( "#mapList" ).append('<li data-role="list-divider">Trip Summary</li>');


    $.getJSON(URL +  "&callback=?",
        function(data) {
            console.log(data);
             $( "#mapList" ).append('<div align="center"><li class="headentry"> Distance = ' +
                    data.route.distance.toFixed(2) + 'm'  +
                   ' Time = ' + data.route.formattedTime +  '</li></div>');

            $( "#mapList" ).append('<li data-role="list-divider">Turn by Turn Directions</li>');

            var html = "";
            console.log(data);
            console.log(data.route.legs[0].maneuvers);

            $.each(data.route.legs[0].maneuvers, function(index, current) {
                var item =
                    $('<div><li><img class="profile">' +
                        '<p class="mapentry"></p></li></div>');

                console.log(current);

                var content = (index+1) + ". " + current.narrative +
                                "[" + current.distance.toFixed(2) + "m ]";

                if (current.mapUrl)
                    item.find(".mapentry").append(content).wrap("<a href=" + current.mapUrl + " target=_m></a>");
                else
                    item.find(".mapentry").append(content);

                item.find(".profile").attr("src", current.iconUrl);

                html += item.html();
            });


            $( "#mapList" ).append(html).listview( "refresh", true );
            $.mobile.changePage( $("#mapPage") );
        });
}











