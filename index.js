// Your code here

function clock() {
  var currentTime = new Date();
  var timeOfDay = "AM";
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (hours == 0) {
    hours = 12;
  }else if (hours > 12){
    hours = hours - 12;
    timeOfDay = "PM";
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + hours;
  }
  if (seconds < 10) {
    seconds = "0" + hours;
  }
  var time = hours + ":" + minutes + ":" + seconds + " " + timeOfDay;
  $('#clock').html(time);
};
  clock();
 setInterval(clock, 1000);
