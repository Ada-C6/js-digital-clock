// Your code here
var getTime = function() {
  var getDate = new Date();
  var currentTime = getDate.toLocaleString();

  $("#clock").html(currentTime);
};

//Need to use getTime without the parentheses because getTime() returns the time, when really we want setInterval to call the function itself (aka just getTime)
var loopTime = setInterval(getTime, 1000);
