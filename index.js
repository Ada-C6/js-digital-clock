// Your code here
$(document).ready(function() {

  var myTime = setInterval(function(){time();}, 1000);

  var time = function(){
    var rightNow = new Date(),
        hour = rightNow.getHours(),
        minute = rightNow.getMinutes(),
        second = rightNow.getSeconds(),
        standardHour = hour % 12 || 12,
        standardMinute = minute < 10 ? "0" + minute : minute,
        standardSecond = second < 10 ? "0" + second : second,
        amPm = hour < 12 ? "AM":"PM";
    $('#clock').empty();
    $('#clock').append("<p>" + standardHour + ":" + standardMinute + ":" + standardSecond + " " + amPm + "</p>");
  };

  // setInterval('window.location.reload()', 1000); tried and removed because it's too laggy.
});
