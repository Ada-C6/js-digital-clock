// Your code here
$(document).ready(function() {

  var myTime = setInterval(function(){time();}, 1000);

  var time = function(){
    var rightNow = new Date();
    $('#clock').empty();
    $('#clock').append("<p>" + rightNow + "</p>");
  };

  // setInterval('window.location.reload()', 1000); tried and removed because it's too laggy.
});
