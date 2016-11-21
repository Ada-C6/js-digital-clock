// Your code here
$(document).ready(function() {
   var intervalID = setInterval(myCallback, 500);
});

   var myCallback = function(){
    $('#clock').empty();
   var currentTime = new Date();

   ///////// day ///////////
   var dayIndex = currentTime.getDay();
   var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   var day = dayNames[dayIndex];


  ////////// month //////////
  var monIndex = currentTime.getMonth();
  var allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var month = allMonths[monIndex];

  ////////// date //////////
  var date = currentTime.getDate();

  /////////// year /////////
  var year = currentTime.getFullYear();

  ////////// hour //////////
  var hour = currentTime.getHours();
  var am;
  if (hour < 13){ am = "AM"; }
  else {
    am = "PM";
    hour = hour - 12;
  }

  //////// minute /////////
  var min = currentTime.getMinutes();

  //////// second /////////
  var second = currentTime.getSeconds();

   $('#clock').append('<p>' + day + ", " + month + " " + date + ", " + year + '</p>' +
    '<p>' + hour + ":" + min + ":" + second + " " + am + '</p>');
  };
