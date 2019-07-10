function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		total: t,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds
	};
}

function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date('07/20/2019 10:1 AM')));
initializeClock('clockdiv', deadline);

// Get the modal
var modal = document.getElementById('myForm');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
	modal.style.display = 'flex';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

$(document).ready(function() {
	setTimeout(function() {
		$('body').addClass('loaded');
	}, 1900);
});

function receptionAddress() {
	// If it's an iPhone..
	if (
		navigator.platform.indexOf('iPhone') != -1 ||
		navigator.platform.indexOf('iPod') != -1 ||
		navigator.platform.indexOf('iPad') != -1
	)
		//  window.open("maps://maps.google.com/maps?daddr=Taling Ngam, Ko Samui District, Surat Thani 84140, Thailand");
		window.open(
			'https://www.google.com.au/maps/place/Miskawaan+Luxury+Beachfront+Villas/@9.56952,99.9985453,17z/data=!3m1!4b1!4m8!3m7!1s0x3054f0afa375b3b3:0xa414b9d7b6f37bec!5m2!4m1!1i2!8m2!3d9.56952!4d100.000734'
		);
	//  window.open("maps://maps.google.com/maps?daddr=Taling Ngam, Ko Samui District, Surat Thani 84140, Thailand");
	else
		window.open(
			'https://www.google.com.au/maps/place/Miskawaan+Luxury+Beachfront+Villas/@9.56952,99.9985453,17z/data=!3m1!4b1!4m8!3m7!1s0x3054f0afa375b3b3:0xa414b9d7b6f37bec!5m2!4m1!1i2!8m2!3d9.56952!4d100.000734'
		);
}

function weddingAddress() {
	// If it's an iPhone..
	if (
		navigator.platform.indexOf('iPhone') != -1 ||
		navigator.platform.indexOf('iPod') != -1 ||
		navigator.platform.indexOf('iPad') != -1
	)
		//  window.open("maps://maps.google.com/maps?daddr=Taling Ngam, Ko Samui District, Surat Thani 84140, Thailand");
		window.open(
			'https://www.google.co.nz/maps/place/Saint+Anna+Catholic+Church/@9.489544,99.9058528,12.42z/data=!4m5!3m4!1s0x3054f7addd45f5d3:0xb8fce6b9e397a70d!8m2!3d9.541032!4d99.93679'
		);
	//  window.open("maps://maps.google.com/maps?daddr=Taling Ngam, Ko Samui District, Surat Thani 84140, Thailand");
	else
		window.open(
			'https://www.google.co.nz/maps/place/Saint+Anna+Catholic+Church/@9.489544,99.9058528,12.42z/data=!4m5!3m4!1s0x3054f7addd45f5d3:0xb8fce6b9e397a70d!8m2!3d9.541032!4d99.93679'
		);
}

// Lazy Loading
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});


