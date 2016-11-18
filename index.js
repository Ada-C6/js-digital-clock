// Your code here

var padding = function(number) {
  if (number.toString().length == 1) {
    number = "0" + number;
  }
  return number;
};

var clock = function() {
  var now = new Date();
  $('#clock').html(now.getHours() + ":" + padding(now.getMinutes()) + ":" + padding(now.getSeconds()));
};

var interval = window.setInterval(clock, 500);

module.exports = index;
