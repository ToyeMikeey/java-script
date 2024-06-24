function startGame() {
    document.getElementById("gamestart").style.display = "none";
    document.getElementById("container").style.display = "flex";
    currentIndex = 0;
    document.getElementById("rsltDisp").innerHTML = disPlay;

}
var learnCombo = [
    { letter: 'A', tag: 'Apple', image: '<img src="apple.jpg" style="width: 400px; height: 400px;" >' },
    { letter: 'B', tag: 'Ball', image: '<img src="football.webp" style="width: 400px; height: 400px;">' },
    { letter: 'C', tag: 'Cat', image: '<img src="cat.avif" style="width: 400px; height: 400px;" >' },
    { letter: 'D', tag: 'Drum', image: '<img src="drum.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'E', tag: 'Egg', image: '<img src="egg.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'F', tag: 'Flower', image: '<img src="flowers.webp" style="width: 400px; height: 400px;">' },
    { letter: 'G', tag: 'Grapes', image: '<img src="grapes.webp" style="width: 400px; height: 400px;">' },
    { letter: 'H', tag: 'Horse', image: '<img src="horse.webp" style="width: 400px; height: 400px;">' },
    { letter: 'I', tag: 'IceCream', image: '<img src="icecream.jpeg" style="width: 400px; height: 400px;">' },
    { letter: 'J', tag: 'Jar', image: '<img src="jar.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'K', tag: 'Key', image: '<img src="key.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'L', tag: 'Ladder', image: '<img src="ladder.avif" style="width: 400px; height: 400px;">' },
    { letter: 'M', tag: 'Monkey', image: '<img src="monkey.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'N', tag: 'Nurse', image: '<img src="nurse.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'O', tag: 'Orange', image: '<img src="orange.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'P', tag: 'Pineapple', image: '<img src="pineapple.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'Q', tag: 'Queen', image: '<img src="queen.avif" style="width: 400px; height: 400px;">' },
    { letter: 'R', tag: 'Robot', image: '<img src="robot.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'S', tag: 'Swimmingpool', image: '<img src="swimmingpool.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'T', tag: 'Toilet', image: '<img src="toilet.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'U', tag: 'Umbrella', image: '<img src="umbrella.webp" style="width: 400px; height: 400px;">' },
    { letter: 'V', tag: 'Vacuum', image: '<img src="vacuum.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'W', tag: 'Wand', image: '<img src="wand.avif" style="width: 400px; height: 400px;">' },
    { letter: 'X', tag: 'Xylophone', image: '<img src="xylo.jpg" style="width: 400px; height: 400px;">' },
    { letter: 'Y', tag: 'Yam', image: '<img src="yam.webp" style="width: 400px; height: 400px;">' },
    { letter: 'Z', tag: 'Zebra', image: '<img src="zebra.jpg" style="width: 400px; height: 400px;">' }

];


let currentIndex = 0;
var disPlay = learnCombo[0].letter + " For  " + learnCombo[0].tag + " " + learnCombo[0].image;
document.getElementById("rsltDisp").innerHTML = disPlay;


// function nextLetter() {
//     currentIndex++;
//     // if (currentIndex >= learnCombo.length) {
//     //     currentIndex = 0;
//     // };


//     var currentItem = learnCombo[currentIndex];
//     var disPlay = currentItem.letter + " For " + currentItem.tag + " " + currentItem.image;
//     document.getElementById("rsltDisp").innerHTML = disPlay;
// }

function displayCurrent() {
    var currentItem = learnCombo[currentIndex];
    var disPlay = currentItem.letter + " For " + currentItem.tag + " " + currentItem.image;
    document.getElementById("rsltDisp").innerHTML = disPlay;

}
function nextLetter() {

    if (currentIndex < learnCombo.length - 1) {
        currentIndex++;
        displayCurrent();
    }



}

// function prevLetter() {
//     currentIndex--;
//     // if (currentIndex > 0) {

//     //     currentIndex = learnCombo.length - 1;
//     // };
//     var currentItem = learnCombo[currentIndex];
//     var disPlay = currentItem.letter + " For " + currentItem.tag + " " + currentItem.image;
//     document.getElementById("rsltDisp").innerHTML = disPlay;

// }
function prevLetter() {

    if (currentIndex > 0) { currentIndex--; displayCurrent(); }


}

function restartGame() {
    currentIndex = 0;
    document.getElementById("rsltDisp").innerHTML = disPlay;
}
function exitGame() {
    document.getElementById("gamestart").style.display = "flex";
    document.getElementById("container").style.display = "none";
}