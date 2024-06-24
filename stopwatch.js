var hrs = 0;
var mins = 0;
var secs = 0;
var millisecs = 0;

var hrscount = document.getElementById('hrs');
var minscount = document.getElementById('mins');
var secscount = document.getElementById('secs');
var milliseccount = document.getElementById('millisec');

var myInterval = 0;

function startBttn() {
    if (myInterval === 0) {
        myInterval = setInterval(function () {
            millisecs++;
            milliseccount.innerHTML = millisecs;
            if (millisecs > 99) {
                millisecs = 0;
                secs++;
                if (secs <= 9) {
                    secscount.innerHTML = "0" + secs;
                } else {
                    secscount.innerHTML = secs;
                }
            }
            if (secs > 59) {
                secs = 0;
                mins++;
                minscount.innerHTML = mins;
                if (mins <= 9) {
                    minscount.innerHTML = "0" + mins;
                } else {
                    minscount.innerHTML = mins;
                }
            }
            if (mins > 59) {
                mins = 0;
                hrs++;
                if (hrs <= 9) {
                    hrscount.innerHTML = "0" + hrs;
                } else {
                    hrscount.innerHTML = hrs;
                }
            }
        }, 10);
    }
}

function restartBttn() {
    clearInterval(myInterval);
    myInterval = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    millisecs = 0;
    hrscount.innerHTML = "00";
    minscount.innerHTML = "00";
    secscount.innerHTML = "00";
    milliseccount.innerHTML = "00";
}

// function pauseBttn() {
//     if (myInterval !== 0) {
//         clearInterval(myInterval);
//         myInterval = 0;
//     }
// }
function pauseBttn() {
    clearInterval(myInterval);
    myInterval = 0;
}