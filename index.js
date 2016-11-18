$(document).ready( function() {
  getTime(['America/Los_Angeles', "America/New_York", "America/Denver","Europe/London"]);
  var interval = setInterval(getTime, 1000);
});


var getTime = function(zones){
  var now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();

  var clocks = "";

  for (var i = 0; i < zones.length; i++){
    var format = "HH:mm:ss";
    var currentTime = moment(now, format).tz(zones[i]).format(format);
    clocks += zones[i] + ": " + currentTime + " "
  }

  // Number formatting from: http://stackoverflow.com/questions/8043026/javascript-format-number-to-have-2-digit

  $('.clockface').text(clocks);
}

// $('h2').click(function (){
//   if ($('h2').attr('class') == 'brightred'){
//     $('h2').attr('class', '');
//   } else {
//     $('h2').attr('class', 'brightred');
//   }
// });
