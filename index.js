$(document).ready(function()
{
    var refreshId = setInterval( function()
    {
        var now = new Date($.now());
        $('#clock').html(now);
    }, 1000);
});
