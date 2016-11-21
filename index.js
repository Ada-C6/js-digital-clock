$(document).ready(function() {

  Date.prototype.dateNow = function () {
    return (((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) + "/" +
    ((this.getDate() < 10)?"0":"") + this.getDate() + "/" +
    this.getFullYear();
  }

  Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
  }

  var returnDateTime = function() {
    var today = new Date();

    $('#clock').html(
      today.dateNow() +
      "<br>" + "<br>" +
      today.timeNow());
  }

  var interval = window.setInterval(returnDateTime, 1000);

});
