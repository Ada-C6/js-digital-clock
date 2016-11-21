// Your code here
$(document).ready(function() {

  var seattleTime = setInterval(function(){time("Seattle", "WA", 8);}, 1000);
  var chicagoTime = setInterval(function(){time("Chicago", "IL", 10);}, 1000);
  var parisTime = setInterval(function(){time("Paris", "France", 17);}, 1000);
  var seoulTime = setInterval(function(){time("Seoul", "Korea", 25);}, 1000);

  var time = function(city, state, offset){
    var d = new Date();
    var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
    var rightNow = new Date(utc + (3600000 * offset));
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
    $('#' + city).empty();
    $('#' + city).append("<h3>" + city + ", " + state + "</h3>");
    $('#' + city).append("<p>" + day + "<br />" + month + " " + date + ", " + year + "</p>");
    $('#' + city).append("<p>" + standardHour + ":" + standardMinute + ":" + standardSecond + " " + amPm + "</p>");
  };

  // setInterval('window.location.reload()', 1000); tried and removed because it's too laggy.
});
