// Your code here
var getTime = function() {
  var getDate = new Date();
  var currentTime = getDate.toLocaleString();

  $("#clock").html(currentTime);
};

var loopTime = setInterval(getTime, 1000);
