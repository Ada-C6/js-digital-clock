// Your code here



var Clock = function(zone) {
	this.clock = new Date,
	this.date = this.clock.toUTCString(),
	this.month = this.clock.getMonth(),
	this.day = this.clock.getDate(),
	this.locale = this.clock.toLocaleTimeString('en-US', {timeZone: zone, timeZoneName: 'short'});

}


$(document).ready(function() {
	
	var options = ['America/Anchorage','America/Los_Angeles', 'America/New_York', 'Europe/Rome', 'Europe/Moscow', 'Asia/Calcutta', 'Asia/Shanghai', 'Australia/Melbourne'];
		
	options.forEach(function(option) {
		var clock = new Clock(option);
		var label = option.split("/").pop();
		var labelTwo = label.replace(/_/g,' ')
		var rightNow = option + " " + clock.locale;
				
		$('#clock').append("<p" + " id=" + option[9] + ">" + rightNow + "</p>");
	});

	var intervalID = window.setInterval(changeTime, 1000);	
	function changeTime() {

		options.forEach(function(option) {
			var options = this.options
			var newClock = new Clock(option);
			var newNow = option + " " + newClock.locale;
			$( '#' + option[9]).text(newNow);
		});	
	};

});


