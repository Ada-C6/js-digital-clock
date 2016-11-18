//index.js
// Your code here

//
// Use the Date Library in Javascript to retrieve the current date and time information. Use the different methods that are provided to you for retrieving the individual: hour, minute and second information.

// console.log("It worked");
// var date = new Date();
// var
// allegedly the Date.now() method returns the number of miliseconds elapsed since 1 January 1970 00:00:00 UTC. created miliseconds from time of creation linxu

// when the broswer first loads  do the things listed below.
$(document).ready(function() { // anonymous function

// create a function that could be called repeatly & will grab the current time and date upon a time I specify later.

function refreshTime () {
  // create a new date object
  date = new Date();

// grab the object with id of #clock
// replace the content of html element with the specialized methods attached to date. which are: .toLocaleDateString & .toLocaleTimeString.

  $('#clock').html(date.toLocaleDateString() + " " + date.toLocaleTimeString());
}


// make repeated calls to function built above. Essentially fulfilling, tbe shoes of a method call to be called every seconds or in this case 1000 miliseconds.

var interval = window.setInterval(refreshTime, 1000);


});
