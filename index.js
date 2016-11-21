// document.getElementById("clock");
var clock = function(){
  var currentTime = new Date();
  var cHours = currentTime.getHours();
  var cMinutes = currentTime.getMinutes();
  var cSeconds = currentTime.getSeconds();

  // make the time show like a clock:
  cMinutes = (cMinutes < 10 ? '0' : '') + cMinutes;
  cSeconds = (cSeconds < 10 ? '0' : '') + cSeconds;

  var timeOfDay = (cHours < 12)? 'AM' : 'Pm';
  cHours = ( cHours > 12)? cHours - 12 : cHours;
  cHours = (cHours === 0)? 12 : cHours;
  var cTimeString = cHours + ':' + cMinutes + ':' + cSeconds + ' ' + timeOfDay;
  $('#clock').html(cTimeString);
};

// console.log(clock);
// console.log(cHours);
// console.log(cMinutes);
// console.log(cSeconds);

// var element =
//
// document.getElementById("clock");

$(document).ready(function()
{
   setInterval('clock()', 1000);
});
