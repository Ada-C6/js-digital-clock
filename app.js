$(document).ready( function() {
  getTime();
  var interval = setInterval(getTime, 1000);
});


var getTime = function(){
  var now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();

  // Number formatting from: http://stackoverflow.com/questions/8043026/javascript-format-number-to-have-2-digit

  $('#clock').text(("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2));
}

// $('h2').click(function (){
//   if ($('h2').attr('class') == 'brightred'){
//     $('h2').attr('class', '');
//   } else {
//     $('h2').attr('class', 'brightred');
//   }
// });
