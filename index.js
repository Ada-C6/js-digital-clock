$(document).ready(function()
{
// Ensuring that there is no delay in bringing up the clock when a user first visits the page
// The values will be refreshed within the refreshID function every second thereafter
  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();
  var year = d.getFullYear()
  var time = d.toLocaleTimeString();

  $('#clock').html(time + " " + month +  "-" + day + "-" + year);

    var refreshId = setInterval( function()
    {
        d = new Date();
        month = d.getMonth()+1;
        day = d.getDate();
        year = d.getFullYear()
        time = d.toLocaleTimeString();

        $('#clock').html(time + " " + month +  "-" + day + "-" + year);
    }, 1000);
});
