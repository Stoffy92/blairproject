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

// function myFunction() {
//   var change = document.getElementById("send-btn");
//   if (change.innerHTML == "Submit")
//   {
//       change.innerHTML = "Sent";
//   }
//   else {
//       change.innerHTML = "Submit";
//   }
// }
// Get the modal
var modal = document.getElementById('myForm');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function change()
{
    document.getElementById("send-btn").value="Close Curtain"; 
}

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
