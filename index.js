$(document).ready(function() {

var updateClock = function() {
  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();
  var year = d.getFullYear()
  var time = d.toLocaleTimeString();

  $('#clock').html(time + " " + month +  "-" + day + "-" + year);
};

updateClock();

setInterval(updateClock, 1000);

});
