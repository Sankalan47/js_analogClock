const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



var date = new Date();
//fetching date time value
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
//assigning the value in the clock and making sure the clock hand moves along with the second hand otherwise hour and minute hand will pop to the next hour or minute when value changes
let hrPosition = (hr*360/12) + (min*(360/60)/12);
let minPosition = (min*360/60) + (sec*(360/60)/60);
let secPosition = sec*360/60;



function runClock(){

    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}


var interval = setInterval(runClock, 1000);