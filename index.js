// function to display the time using Date.now
var currentTime = function() {

  var currentTimeWest = new Date().toLocaleString();
  var currentTimeAsia = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
  var currentTimeEast = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  var currentTimeLondon = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});


  $('#west').html("Pacific Standard Time: " + currentTimeWest);
  $('#east').html("Eastern Standard Time: " + currentTimeEast);
  $('#london').html("London: " + currentTimeLondon);
  $('#asia').html("Asia/Jakarta: " + currentTimeAsia);
};

// sets interval - will call currentTime once a second
var intervalID = window.setInterval(currentTime, 1000);
