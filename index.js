// Your code here

$(document).ready(function() {

  function updateAndDisplay() {
    console.log('hi!');
    var dateTimeObj = new Date();
    $('#clock').text(dateTimeObj);
  }

  var intervalID = window.setInterval(updateAndDisplay, 1000);

});




    // $('#clock').text(dateTimeObj.toTimeString() + dateTimeObj.toDateString());
