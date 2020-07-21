let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

// Getting it to show the current time on the page
let showCurrentTime = function () {
  // display the string on the webpage
  let clock = document.getElementById("clock");

  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
  }

  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  let clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
let updateClock = function () {
  let time = new Date().getHours();
  let messageText;
  let image =
    "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?cs=srgb&dl=man-standing-in-the-middle-of-road-1553783.jpg&fm=jpg";

  let timeEventJS = document.getElementById("timeEvent");
  let timeImageJS = document.getElementById("timeImage");

  if (time == partytime) {
    image =
      "https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    messageText = "Let's party!";
  } else if (time == wakeuptime) {
    image =
      "https://images.pexels.com/photos/3764541/pexels-photo-3764541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    messageText = "Wake up!";
  } else if (time == lunchtime) {
    image =
      "https://images.pexels.com/photos/1030943/pexels-photo-1030943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    messageText = "Let's have some lunch!";
  } else if (time == naptime) {
    image =
      "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    messageText = "Sleep tight!";
  } else if (time < noon) {
    image =
      "https://images.pexels.com/photos/1052150/pexels-photo-1052150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    messageText = "Good morning!";
  } else if (time >= evening) {
    image =
      "https://images.pexels.com/photos/1825012/pexels-photo-1825012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  } else {
    image =
      "https://images.pexels.com/photos/794907/pexels-photo-794907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    messageText = "Good afternoon!";
  }

  timeEventJS.innerText = messageText;
  timeImage.src = image;

  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
let oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Party Time Button To Work
let partyButton = document.getElementById("partyTimeButton");

let partyEvent = function () {
  if (partytime < 0) {
    partytime = new Date().getHours();
    partyButton.innerText = "Party Over!";
  } else {
    partytime = -1;
    partyButton.innerText = "Party Time!";
  }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activates Wake-Up selector
let wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

let wakeUpEvent = function () {
  wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch selector
let lunchTimeSelector = document.getElementById("lunchTimeSelector");

let lunchEvent = function () {
  lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time selector
let napTimeSelector = document.getElementById("napTimeSelector");

let napEvent = function () {
  naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
