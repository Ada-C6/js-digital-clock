// Your code here
$(document).ready(function() {

  var myTime = setInterval(function(){time();}, 1000);

  var time = function(){
    var rightNow = new Date(),
        day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][rightNow.getDay()],
        date = rightNow.getDate(),
        month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][rightNow.getMonth()],
        year = rightNow.getFullYear(),
        hour = rightNow.getHours(),
        minute = rightNow.getMinutes(),
        second = rightNow.getSeconds(),
        standardHour = hour % 12 || 12,
        standardMinute = minute < 10 ? "0" + minute : minute,
        standardSecond = second < 10 ? "0" + second : second,
        amPm = hour < 12 ? "AM":"PM";
    $('#clock').empty();
    $('#clock').append("<p>" + day + "<br />" + month + " " + date + ", " + year + "</p>")
    $('#clock').append("<p>" + standardHour + ":" + standardMinute + ":" + standardSecond + " " + amPm + "</p>");
  };

  // setInterval('window.location.reload()', 1000); tried and removed because it's too laggy.
});
