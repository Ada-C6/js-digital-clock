// Your code here

var padding = function(number) {
  if (number.toString().length == 1) {
    number = "0" + number;
  }
  return number;
};

var nonMilitary = function(item) {
  if (item > 12) {
    item = item - 12
  };
  return item;
};

var amOrPm = function() {
  var now = new Date();
  if (now.getHours() >= 12) {
    return "pm";
  } else {
    return "am";
  }
};

var clock = function() {
  var now = new Date();
  $('#clock').html(nonMilitary(now.getHours()) + ":" + padding(now.getMinutes()) + ":" + padding(now.getSeconds()) + " " + amOrPm());
};

var interval = window.setInterval(clock, 500);

module.exports = index;
