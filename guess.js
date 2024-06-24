// function calcGuess() {
//     var guess = parseInt(document.getElementById("numbr").value);
//     var guessCalc = Math.round(Math.random() * 20);
//     if (guessCalc = guess) {
//         document.getElementById("dispMssg").innerHTML = "congratulations, your luck is impecable, your guess of " + guess + "was on point"
//     } 
//     else if (guessCalc > guess) { document.getElementById("dispMssg").innerHTML = "Sorry, your guess of " + guess + " was too low, guess again" }
//      else { document.getElementById("dispMssg").innerHTML = "Sorry, your guess of " + guess + " was too high, guess again" }
// }
function calcGuess() {
    var guess = Number(document.getElementById("numbr").value);
    var guessCalc = Math.floor(Math.random() * 21);
    if (guessCalc > guess) {
        document.getElementById("dispMssg").innerHTML = "Sorry, your guess of " + guess + " was too low, guess again";
    } else if (guessCalc === guess) {
        document.getElementById("dispMssg").innerHTML = "Congratulations, your luck is impeccable, your guess of " + guess + " was on point";
    } else {
        document.getElementById("dispMssg").innerHTML = "Sorry, your guess of " + guess + " was too high, guess again";
    }
}
