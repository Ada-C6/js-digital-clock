// Your code here
var civvie=true;

var getTime = function(){
	var d = new Date();
	return d;
}
var suffix=''
var civilianTime=function(hours){
	var hours = getTime().getHours();
	// console.log(hours)
	if (hours > 12) {
	    hours -= 12;
	    suffix='pm';
	} else if (hours === 0) {
	   hours = 12;
	   suffix='am';
	   
	} else{
		suffix='am';
	}
	return hours;
}

var updateClock=function(){
	if (civvie) {
		var hours= civilianTime(getTime().getHours());
	}else{
		var hours= getTime().getHours();
		// console.log("hours:", hours)
	}
	// console.log("civvie:",civvie)

	var mins=getTime().getMinutes()
	var secs=getTime().getSeconds()
	var minSecs=('0'  + mins).slice(-2)+':'+('0' + secs).slice(-2);

	$('#clock').empty().append("<p>"+hours+":"+minSecs+suffix+"</p>")
}
console.log(civvie);
var continueClock=function(){
	// console.log(civvie);
	var everySec = setInterval(updateClock, 1000);
}
$(document).ready(continueClock());

var quaiMode= function(){
	$('body').css('background-color','#f9e032');
	civvie=false;
	suffix='';
}

var civilianMode=function(){
	$('body').css('background-color','#80d4ea');
	civvie=true;

}

$("#quai-button").click(quaiMode);
$("#civilian-button").click(civilianMode);


