

    //  check Web Worker support
//            if (typeof(Worker) != "undefined")
//                document.write("Web Worker support is available.")
//            else
//               document.write("Web Worker support is not available.")

    var API_KEY = "azcsgfdx44fzqenbe6zuqqmk";
    var URL = "http://api.wmata.com/Bus.svc/json/jRoutes?api_key=" + API_KEY;




    var items = $.getJSON(URL + "&callback=?",
        function(data) {
            console.log(data);

        });



    return(items);







// on page initialization; .bind( eventType [, eventData ], handler(eventObject) )
//$( "body[name=wholePage]" ).live( "pageinit", function(){
//    $("#from,#to").bind( "change", function(event) {
//        var from = $('#from').val();
//        console.log("From: " + from);
//
//        var to = $('#to').val();
//        console.log("To: " + to);
//
//        if ((from.length > 0) && (to.length > 0))
//        {
//           loadRoutes(from, to);
//        }
//
//    });
//})


//             $( "#mapList" ).append('<div align="center"><li class="headentry"> Distance = ' +
//                    data.route.distance.toFixed(2) + 'm'  +
//                   ' Time = ' + data.route.formattedTime +  '</li></div>');
//
//            $( "#mapList" ).append('<li data-role="list-divider">Turn by Turn Directions</li>');
//
//            var html = "";
//            console.log(data);
//            console.log(data.route.legs[0].maneuvers);
//
//            $.each(data.route.legs[0].maneuvers, function(index, current) {
//                var item =
//                    $('<div><li><img class="profile">' +
//                        '<p class="mapentry"></p></li></div>');
//
//                console.log(current);
//
//                var content = (index+1) + ". " + current.narrative +
//                                "[" + current.distance.toFixed(2) + "m ]";
//
//                if (current.mapUrl)
//                    item.find(".mapentry").append(content).wrap("<a href=" + current.mapUrl + " target=_m></a>");
//                else
//                    item.find(".mapentry").append(content);
//
//                item.find(".profile").attr("src", current.iconUrl);
//
//                html += item.html();
//            });
//
//
//            $( "#mapList" ).append(html).listview( "refresh", true );
//            $.mobile.changePage( $("#mapPage") );












