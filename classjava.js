// var myAge = 64
// if (myAge <= 12) { console.log("Youngie") }
// else if (myAge >= 12) { console.log("Agba") }

// var myAge = 64
// if (myAge > 100) { console.log("Youngie") }
// else if (myAge > 200) { console.log("Agba") }
// else { console.log("i dont know") }



// for (var i = 1; i <= 5; i++) { console.log("Hello"), document.write("HEY n")}


// for (var i = 1; i <= 100; i++) {
//     if (i % 2 === 0 ) {
//         console.log(i + " Fizz");
//     } else {
//         console.log(i + " Buzz");
//     }
// }

// for (var i = 1; i <= 100; i++) {
//     if (i % 2 === 0 && i % 3 === 0) {
//         console.log(i + " FizzBuzz");
//     } else {
//         console.log(i + " Oops");
//     }
// }

// for (var i = 1; i < 5; i++) { for (var j = 1; j < 5; j++) { console.log(i, j) } }






// for (var i = 1; i <= 12; i++) {
//     for (var j = 1; j <= 12; j++) { document.write(i + "*" + j + "=" + i * j + "<br>" ) }
// }




// function getTable() {
//     var multiTab = ''

//     for (var i = 1; i <= 12; i++) {
//         for (var j = 1; j <= 12; j++) {
//             var mulTipli = i + " * " + j + " = " + (i * j);
//             multiTab += mulTipli + "<br>";
//         }
//     }
//     document.getElementById("seeTable").innerHTML = multiTab;
// }

// for (var i = 1; i <= 12; i++) {
//     for (var j = 1; j <= 12; j++) {
//         document.write(i + " * " + j + " = " + i * j + "<br>");
//     }
// }

// console.log(Math)
// console.log(Math.PI)
// console.log(Math.floor(4.0))
// console.log(Math.ceil(4.1))
// console.log(Math.round(4.9))
// console.log(Math.trunc(4.4)) 
// console.log(Math.abs(-4.7))
// console.log(Math.sqrt(16))
// console.log(Math.max(44, 40, 60))
// console.log(Math.min(44, 40, 60))
// console.log(Math.log10(10))
// console.log(Math.log10(100))
// console.log(Math.cbrt(27))
// console.log(Math.pow(4,2))
// console.log((Math.random() * 100))
// console.log(Math.round(Math.random() * 100))


// console.log((Math.random() * 100))

// console.log((Math.sin(30 * Math.PI / 180 ))) 
// convert from rad to degrees 

// floor
// ceil 
// round 
// trunc
// sqrt
// sin 
// cos 
// tan 
// max 
// min 
// log
// cbrt
// pow 
// random 
// sqrt 

// function call(event) {
//     // console.log(event)

//     // console.log(event).srcElement.innerHTML = "submit"

//     // event.srcElement.innerHTML = "Submit"
// }


// function handleInput() {
//     var inp = document.getElementById("inputFld").value;
//     document.getElementById("showdisp").innerHTML = inp;
// }


// function handleInput(event) {
//     var inp = event.target.value;
//     document.getElementById("showdisp").innerHTML = inp;
// }

// function chang(event) {
//     event.target.innerHTML = "x"
// }

// let currentPlayer = 'X';

// function chang(event) {
//     if (event.target.innerHTML === '') {
//         event.target.innerHTML = currentPlayer;
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     }
// }



// function handleInput(event) {
//     var inp = event.target.value;
//     event.showdisp.innerHTML = inp;
// }


// document.getElementsByTagName('')

// var myTag = document.getElementsByTagName('p') 
// console.log(myTag)

// var myClass = document.getElementsByClassName('trial')
// console.log(myClass) 

// var myGrp = document.querySelector('.trial')
// console.log(myGrp)

// var myGrp = document.querySelector('#proft')
// console.log(myGrp)

// var myGrp = document.querySelector('p')
// console.log(myGrp)

// var myGrp = document.querySelectorAll('#proft')
// console.log(myGrp)



// document.querySelector('p').style.border = "1px solid black"
// document.querySelector('p').style.color = "red"
// document.querySelector('p').style.borderRadius = "15px"
// document.querySelector('p').style.backgroundColor = "black"
// document.querySelector('p').style.fontSize = "30px"
// document.querySelector('p').style.height = "200px" 

// var creation = document.createElement('h1')
// // console.log(creation)

// var myText = document.createTextNode('Hello World')
// // console.log(myText)

// var joinTxt = creation.appendChild(myText)
// // console.log(joinTxt)


// document.querySelector('body').innerHTML = creation.innerHTML

// document.querySelector('h1').setAttribute('id', 'allText');
// console.log(document.querySelector('h1'));

// document.querySelector('div').setAttribute('div', 'alltxt');
// console.log(document.querySelector('div'));

// for (var i = 0; i < 5; i++) {
//     console.log(i)
// }

// var i = 0
// while (i < 5) { console.log(i); i++ }

// var i = 1
// do {
//     console.log(i); i++
// } while (i <= 10)

// setTimeout(function () { alert('Hello World') }, 3000);

// setInterval(function () { alert('Welcome to the future') }, 4000);


// var myInterval = setInterval(function () { alert('accept cookies to continue') }, 6000)
// function clickk() {
//     clearInterval(myInterval)

// }

console.log(localStorage);
localStorage.clear();
localStorage.setItem('name', 'Mikeey');

var display = document.getElementById('showtxt');
display.innerHTML = localStorage.getItem('name') + ' is a bad boy';