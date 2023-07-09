$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:4000, // Set auto slide duration in milliseconds
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1100: {
            items: 6,
        },
        1400: {
            items: 6,
            // loop: false,
        }
    }

})


// count down timer ------------------------>


  // Set the date and time of the countdown
  var countdownDate = new Date("2023-12-31T23:59:59").getTime();

  // Update the countdown every second
  var countdownInterval = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var remainingTime = countdownDate - now;

    // Calculate the remaining days, hours, minutes, and seconds
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the remaining days, hours, minutes, and seconds
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (remainingTime < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "<h4 >😥Offer Ended!😥</h4>";
    }
  }, 1000);