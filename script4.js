// Set the date we're counting down to
var countDownDate = new Date("Oct 4, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Display the result in the element with id="demo"
  document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Display the result in the element with id="demo"
  document.getElementById("demo3").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Display the result in the element with id="demo"
  document.getElementById("demo4").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Display the result in the element with id="demo"
  document.getElementById("demo5").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Display the result in the element with id="demo"
  document.getElementById("demo6").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Display the result in the element with id="demo"
  document.getElementById("demo7").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Display the result in the element with id="demo"
  document.getElementById("demo8").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Display the result in the element with id="demo"
  document.getElementById("demo9").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Display the result in the element with id="demo"
  document.getElementById("demo10").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo1").innerHTML = "EXPIRED";
    document.getElementById("demo2").innerHTML = "EXPIRED";
    document.getElementById("demo3").innerHTML = "EXPIRED";
    document.getElementById("demo4").innerHTML = "EXPIRED";
    document.getElementById("demo5").innerHTML = "EXPIRED";
    document.getElementById("demo6").innerHTML = "EXPIRED";
    document.getElementById("demo7").innerHTML = "EXPIRED";
    document.getElementById("demo8").innerHTML = "EXPIRED";
    document.getElementById("demo9").innerHTML = "EXPIRED";
    document.getElementById("demo10").innerHTML = "EXPIRED";
  }
}, 1000);