$(document).ready( function() {
  locations = [['Los Angeles', 'America/Los_Angeles'], ['New York', "America/New_York"], ['Denver', "America/Denver"], ['London', "Europe/London"]];
  getTime(locations);
  var interval = setInterval(getTime, 1000, locations);
});


var getTime = function(zones){
  $('.clock').empty();

  var now = new Date()

  //Use of moment from: http://stackoverflow.com/questions/10087819/convert-date-to-another-timezone-in-javascript

  for (var i = 0; i < zones.length; i++){
    var format = "h:mm:ss A <br> MMMM DD, YYYY";
    var currentTime = moment(now, format).tz(zones[i][1]).format(format);
    $('.clock').append("<div class=column><div class=callout><h3>" + zones[i][0] + "</h3><p>" + currentTime + "</p>");
  }

  $('.clock').append("</div>")

}

// $('h2').click(function (){
//   if ($('h2').attr('class') == 'brightred'){
//     $('h2').attr('class', '');
//   } else {
//     $('h2').attr('class', 'brightred');
//   }
// });
