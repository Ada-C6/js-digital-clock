$(document).ready( function() {

  var clock = function() {
    $("#clock").empty();

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var checkFormat = function(time) {
       if (time < 10 ) {
         time = "0" + time;
       }
       return time;
     }

    hours = checkFormat(hours);
    minutes = checkFormat(minutes);
    seconds = checkFormat(seconds);

    $("#clock").append(hours + ":" + minutes + ":" + seconds)
  }

  clock();
  setInterval(clock, 1000);

});
