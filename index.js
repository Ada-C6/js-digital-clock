// Your code here

var nIntervId;

var timeKeeper = function() {
  var now = new Date(Date.now());
  var target = document.getElementById('clock');
  target.innerHTML = now.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+now.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+now.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
};

function updateClock() {
  nIntervId = setInterval(timeKeeper, 1000);
}

updateClock();
