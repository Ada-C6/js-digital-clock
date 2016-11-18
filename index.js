// Your code here

var timeNow = function() {
  var now = new Date();
  var t = "AM";
  var h = now.getHours();
  if (h > 12) {
    h = h - 12;
    t = "PM";
  }
  var m = pad(now.getMinutes(), 2);
  var s = pad(now.getSeconds(), 2);

  $( "#clock" ).html( "" + h + ":" + m + ":" + s + " " + t + "" );

  // // var oElem = document.getElementById("body");
  // var backgroundColor = backgroundColor == "red" ? "blue" : "red";
  // // $( "body" ).click(function() {
  //   var color = $( this ).css( "background-color" );
  //   $( "body" ).html( "That div is <span style='color:" +
  //     backgroundColor + ";'>" + backgroundColor + "</span>." );
  // // });

  // Random text color (always a dark-ish color)
  var r = Math.floor(Math.random() * 150);
  var g = Math.floor(Math.random() * 150);
  var b = Math.floor(Math.random() * 150);
  var color = "rgb(" + r + "," + g + "," + b + ")";
  $( "#clock" ).css( "color", color );

  // Random background color (any color)
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var color = "rgb(" + r + "," + g + "," + b + ")";
  $( "body" ).css( "background-color", color );



};

function pad(num, size) {
  var s = num.toString();
  while (s.length < size) s = "0" + s;
  return s;
}

var intervalID = window.setInterval(timeNow, 1000);
