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
			'https://www.google.co.nz/maps/place/Villa+Laem+Sor/@9.4110593,99.9598396,16.33z/data=!4m12!1m6!3m5!1s0x3054f4cece7cbc0d:0xec45e773bcff5e9a!2sVilla+Laem+Sor!8m2!3d9.4111329!4d99.9628853!3m4!1s0x3054f4cece7cbc0d:0xec45e773bcff5e9a!8m2!3d9.4111329!4d99.9628853'
		);
	//  window.open("maps://maps.google.com/maps?daddr=Taling Ngam, Ko Samui District, Surat Thani 84140, Thailand");
	else
		window.open(
			'https://www.google.co.nz/maps/place/Villa+Laem+Sor/@9.4110593,99.9598396,16.33z/data=!4m12!1m6!3m5!1s0x3054f4cece7cbc0d:0xec45e773bcff5e9a!2sVilla+Laem+Sor!8m2!3d9.4111329!4d99.9628853!3m4!1s0x3054f4cece7cbc0d:0xec45e773bcff5e9a!8m2!3d9.4111329!4d99.9628853'
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

// $(document).ready(function() {
//   $(".submit").click(function() {
//     $(".submit").addClass("loading");
//     setTimeout(function() {
//       $(".submit").addClass("hide-loading");
//       // For failed icon just replace ".done" with ".failed"
//       $(".done").addClass("finish");
//     }, 3000);
//     setTimeout(function() {
//       $(".submit").removeClass("loading");
//       $(".submit").removeClass("hide-loading");
//       $(".done").removeClass("finish");
//       $(".failed").removeClass("finish");
//     }, 5000);
//   })
// });

// FORM SUBMISSION LOGIC

// $(function() {
//   $('#body').addClass('loaded');
// });

// $(document).ready(function() {

//   setTimeout(function(){
//       $('body').addClass('loaded');
//   }, 3000);

// });
// window.onload= function() {
//   document.getElementById("loader").style.display = "none"
// }

// var myVar;

// function myLoader() {
//   myVar = setTimeout(showPage, 1000);
// }

// function showPage() {
//   document.getElementsByClassName("loader").style.display = "none";
//   document.getElementsByClassName("hero-image").style.display = "flex";
// }

// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// // jQuery Button Animation
// $(function() {
//   $( "#button" ).click(function() {
//     $( "#button" ).addClass( "onclic", 250, validate);
//   });

//   function validate() {
//     setTimeout(function() {
//       $( "#button" ).removeClass( "onclic" );
//       $( "#button" ).addClass( "validate", 450, callback );
//     }, 2250 );
//   }
//     function callback() {
//       setTimeout(function() {
//         $( "#button" ).removeClass( "validate" );
//       }, 1250 );
//     }
//   });
