1. If you're running a jquery test add this code for index.js

//index.js
// Your code here
console.log("It worked");

$(document).ready(function() { // anonymous function
  $("<h1>test passes</h1>").appendTo($("body"));
  console.log($("body").html());


});

2. <script src="jquery-3.1.1.js"></script>

3. add jquery-3.1.1.js to file folder. 
