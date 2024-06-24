// function number(x) {
//     document.getElementById("display").value += x;
//     var display = document.getElementById("display");
//     if (isInputtingBase) {
//         base += x;
//         display.value = "Enter base: " + base;
//     } else if (isInputtingLogValue) {
//         logValue += x;
//         display.value = "Enter value: " + logValue;
//     } else {
//         display.value += x;
//     }
// }
// function operator(x) {
//     document.getElementById("display").value += x;
// }
// function powerof3(x) {
//     var x = document.getElementById("display").value;
//     var rstt = Math.pow(x, 3);
//     document.getElementById("display").value = rstt
// }
// function powerof2(x) {
//     var x = document.getElementById("display").value;
//     var rstt = Math.pow(x, 2);
//     document.getElementById("display").value = rstt
// }
// function squartt(x) {
//     var x = document.getElementById("display").value;
//     var rstt = Math.sqrt(x);
//     document.getElementById("display").value = rstt.toFixed(4)
// }
// function powerofneg(x) {
//     var x = document.getElementById("display").value;
//     var rstt = Math.pow(x, -1);
//     document.getElementById("display").value = rstt.toFixed(4)
// }
// // function logrtm() { 
// //     var base
// //     document.getElementById("display").value = "log"  ;
// // }

// function delet() {
//     document.getElementById("display").value = '';
// }

// function delett() {
//     var display = document.getElementById("display");
//     display.value = display.value.slice(0, -1);
// }
// function equall() {
//     var equalll = document.getElementById("display").value;
//     var result = eval(equalll);
//     document.getElementById("display").value = result;
//     let display = document.getElementById("display");

//     if (isInputtingLogValue) {
//         let result = Math.log(logValue) / Math.log(base);
//         display.value = result;
//         isInputtingBase = false;
//         isInputtingLogValue = false;
//         base = '';
//         logValue = '';
//     } else {
//         try {
//             display.value = eval(display.value);
//         } catch (e) {
//             display.value = "Error";
//         }
//     }
// }

// var isInputtingBase = false;
// var isInputtingLogValue = false;
// var base = '';
// var logValue = '';



// function startLogBase() {
//     isInputtingBase = true;
//     isInputtingLogValue = false;
//     base = '';
//     logValue = '';
//     document.getElementById("display").value = "Enter base: ";
// }

// function logValueInput() {
//     isInputtingBase = false;
//     isInputtingLogValue = true;
//     document.getElementById("display").value = "Enter value: ";
// }

var isInputtingBase = false;
var isInputtingLogValue = false;
var base = '';
var logValue = '';

function startLogBase() {
    isInputtingBase = true;
    isInputtingLogValue = false;
    base = '';
    logValue = '';
    document.getElementById("display").value = "Enter base: ";
}

function logValueInput() {
    isInputtingBase = false;
    isInputtingLogValue = true;
    document.getElementById("display").value = "Enter value: ";
}

function number(x) {
    var display = document.getElementById("display");
    if (isInputtingBase) {
        base += x;
        display.value = "Enter base: " + base;
    } else if (isInputtingLogValue) {
        logValue += x;
        display.value = "Enter value: " + logValue;
    } else {
        display.value += x;
    }
}

function operator(x) {
    document.getElementById("display").value += x;
}

function powerof3() {
    var x = document.getElementById("display").value;
    var rstt = Math.pow(x, 3);
    document.getElementById("display").value = rstt;
}

function powerof2() {
    var x = document.getElementById("display").value;
    var rstt = Math.pow(x, 2);
    document.getElementById("display").value = rstt;
}

function squartt() {
    var x = document.getElementById("display").value;
    var rstt = Math.sqrt(x);
    document.getElementById("display").value = rstt.toFixed(4);
}

function powerofneg() {
    var x = document.getElementById("display").value;
    var rstt = Math.pow(x, -1);
    document.getElementById("display").value = rstt.toFixed(4);
}

function sine() {
    var x = document.getElementById("display").value;
    var rstt = Math.sin(x);
    document.getElementById("display").value = rstt;
}
function cose() {
    var x = document.getElementById("display").value;
    var rstt = Math.cos(x);
    document.getElementById("display").value = rstt;
}
function tane() {
    var x = document.getElementById("display").value;
    var rstt = Math.tan(x);
    document.getElementById("display").value = rstt;
}
function absolute() {
    var x = document.getElementById("display").value;
    var rstt = Math.abs(x);
    document.getElementById("display").value = rstt;
}

function delet() {
    document.getElementById("display").value = '';
}

function delett() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    // if(display = rstt){}
}

function equall() {
    let display = document.getElementById("display");

    if (isInputtingLogValue) {
        let result = Math.log(logValue) / Math.log(base);
        display.value = result;
        isInputtingBase = false;
        isInputtingLogValue = false;
        base = '';
        logValue = '';
    } else {
        display.value = eval(display.value);
    }
}

function logBase10() {
    var x = document.getElementById("display").value;
    var rstt = Math.log10(x);
    document.getElementById("display").value = rstt;
}





