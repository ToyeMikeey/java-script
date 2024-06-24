// function chang(event) {
//     event.target.innerHTML = "x"

// }


// function chang(event) {
//     if (event.target.innerHTML === "x") {
//         event.target.innerHTML = "o";
//     } else {
//         event.target.innerHTML = "x";
//     }
// }

// function chang(event) {
//     var altplay = event.target;
//     if (altplay.innerHTML === "x") {
//         altplay.innerHTML = "o";
//     } else if (altplay.innerHTML === "o") {
//         altplay.innerHTML = "x";
//     } else {
//         altplay.innerHTML = "x"; 
//     }
// }



// function chang(event) {
//     var altplay = event.target;
//     if (altplay.innerHTML === "") {
//         altplay.innerHTML = "x";
//     } else if (altplay.innerHTML === "x") {
//         altplay.innerHTML = "o";
//     } else {
//         altplay.innerHTML = "x";
//     }
// }

var firstclick = "x";

function chang(event) {
    event.target.innerHTML = firstclick;
    if (firstclick === "x") {
        firstclick = "o";
    } else {
        firstclick = "x";
    }
    checkGame();
}

function checkGame() {
    var winArry = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    var cells = document.querySelectorAll('.divone');

    for (var i = 0; i < winArry.length; i++) {
        var combo = winArry[i];
        var a = combo[0];
        var b = combo[1];
        var c = combo[2];

        if (cells[a].innerHTML !== "" && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            var winner = cells[a].innerHTML;
            document.getElementById("displayMssg").innerHTML = winner + " wins!";
            return;
        }
    }
}


function restartGame() {
    var allDivs = document.querySelectorAll('.divone');
    allDivs.forEach(function (cell) {
        cell.innerHTML = "";
    });
    document.getElementById("displayMssg").innerHTML = "";
}