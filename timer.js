function hrsOption() {
    var item = document.getElementById('hrs');
    for (var i = 0; i <= 23; i++) {
        var hrsoption = document.createElement('option');
        hrsoption.value = i;
        hrsoption.textContent = i;
        item.appendChild(hrsoption);
    }
}

function minsOption() {
    var items = document.getElementById('mins');
    for (var i = 0; i <= 59; i++) {
        var minsOption = document.createElement('option');
        minsOption.value = i;
        minsOption.textContent = i;
        items.appendChild(minsOption);
    }
}

function secsOption() {
    var items = document.getElementById('secs');
    for (var i = 0; i <= 59; i++) {
        var secsOption = document.createElement('option');
        secsOption.value = i;
        secsOption.textContent = i;
        items.appendChild(secsOption);
    }
}

hrsOption();
minsOption();
secsOption();

var myInterval;

function startTimer() {
    var selecttime = document.getElementById('selectr');
    selecttime.style.display = "none";

    var countdisplay = document.getElementById('countdown');
    countdisplay.style.display = "flex";

    var hoursDisplay = document.getElementById('hours');
    var minutesDisplay = document.getElementById('minutes');
    var secondsDisplay = document.getElementById('seconds');

    var hrs = document.getElementById('hrs').value
    var mins = document.getElementById('mins').value
    var secs = document.getElementById('secs').value

    var hrsValue = parseInt(hrs)
    var minsValue = parseInt(mins)
    var secsValue = parseInt(secs)

    function updateDisplay() {
        if (hrsValue < 10) {
            hoursDisplay.textContent = '0' + hrsValue;
        } else {
            hoursDisplay.textContent = hrsValue;
        }

        if (minsValue < 10) {
            minutesDisplay.textContent = '0' + minsValue;
        } else {
            minutesDisplay.textContent = minsValue;
        }

        if (secsValue < 10) {
            secondsDisplay.textContent = '0' + secsValue;
        } else {
            secondsDisplay.textContent = secsValue;
        }
    }

    updateDisplay();

    myInterval = setInterval(function () {
        if (secsValue > 0) {
            secsValue--;
        } else {
            if (minsValue > 0) {
                minsValue--;
                secsValue = 59;
            } else {
                if (hrsValue > 0) {
                    hrsValue--;
                    minsValue = 59;
                    secsValue = 59;
                } else {
                    clearInterval(myInterval);
                }
            }
        }
        updateDisplay();
    }, 1000);
}

function restartTimer() {
    clearInterval(myInterval);
    myInterval = 0;
    countdown.style.display = "none";
    selectr.style.display = "flex";
}