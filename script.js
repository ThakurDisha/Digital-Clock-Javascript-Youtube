function digitalClock() {
  var date = new Date();

  var hours = date.getHours() + "";

  var minutes = date.getMinutes() + "";

  var seconds = date.getSeconds() + "";

  var day = date.getDay();

  var weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  if (hours.length < 2) {
    hours = "0" + hours;
  }

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  var Day = weekday[day];

  var clock = " " + hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerHTML = clock;
  document.getElementById("weekday").innerHTML = "Happy" + Day;

  if (hours < 12) {
    document.getElementById("greeting").innerHTML = "Good Morning Disha";
  } else if (hours < 18) {
    document.getElementById("greeting").innerHTML = "Good Afternoon Disha";
  } else if (hours < 22) {
    document.getElementById("greeting").innerHTML = "Good Evening Disha";
  } else {
    document.getElementById("greeting").innerHTML = "Good Night Disha";
  }
}

digitalClock();

setInterval(digitalClock, 1000);
