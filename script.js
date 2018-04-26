var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;

var updateClock = function(){
	// get time event element
	var message = document.getElementById("timeEvent");
	// get image element
	var picture = document.getElementById("lolcat");
	// define default image
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"; 

	if (time == partyTime){
		messageText = "IZ PARTEE TIME!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	} else if (time == napTime) {
		messageText = "IZ NAP TIME…";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	} else if (time == lunchTime) {
		messageText = "IZ NOM NOM NOM TIME!!";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	} else if (time == wakeupTime) {
		messageText = "IZ TIME TO GETTUP.";
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	} else if (time < noon) {
		messageText = "Good morning!";
	} else if (time > evening) {
		messageText = "Good Evening!";
	} else {
		messageText = "Good afternoon!";
	}
	// final assignments
	message.innerText = messageText;
	picture.src = image;

	// create the clock
	var showCurrentTime = function(){
		// get clock element from html
		var clockJS = document.getElementById("clock");
		// establish current time
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridian = "AM";
		// set hours
		if(hours > noon){
			hours = hours – 12;
		}
		// set minutes
		if(minutes < 10){
			minutes = "0" + minutes;
		}
		// set seconds
		if(seconds < 10){
		   seconds = "0" + seconds;
		}
		// set meridian
		if(hours >= noon){
			meridian = "PM";
		}
		// put together string to display time
		var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;
		// assign string to clock on the webpage
		clockJS.innerText = clockTime;
	};
	showCurrentTime();
};

updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);

var buttonJS = document.getElementById("partyTimeButton");

var partyEvent = function(){
	if(isPartyTime === false){
		isPartyTime = true;
		time = partyTime;
		// text in button should read "Party Over"
		buttonJS.innerText = "PARTY OVER";
    	// color of button should be "#0A8DAB"
		buttonJS.style.backgroundColor = "#0A8DAB";
	}else{
		isPartyTime = false;
		time = new Date().getHours();
		// text in button should read "PARTY TIME!"
		buttonJS.innerText = "PARTY TIME!";
      	// color of button should be "#222"
		buttonJS.style.backgroundColor = "#222";
	};
};
// call partyEvent function if party button clicked
buttonJS.addEventListener("click", partyEvent);

// dropdowns
var wakeUpTimeSelectorJS = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelectorJS = document.getElementById("lunchTimeSelector");
var napTimeSelectorJS = document.getElementById("napTimeSelector");
// functions assigning user selections to variables
var wakeUpEvent = function(){
	wakeUpTime = wakeUpTimeSelectorJS.value;
};
var lunchEvent = function(){
	lunchTime = lunchTimeSelectorJS.value;
};
var napEvent = function(){
	napTime = napTimeSelectorJS.value;
};
// event listeners for each dropdown menu
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelectorJS.addEventListener("change", lunchEvent);
napTimeSelectorJS.addEventListener("change", napEvent);