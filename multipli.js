
// function seeTable() {
//     var rowVal = document.getElementById("noRows").value;
//     var colVal = document.getElementById("noCols").value;
//     for (var i = 1; i <= rowVal; i++) {
//         for (var j = 1; j <= colVal; j++) {
//             var result = i * j
//             document.write(i + " * " + j + " = " + result + "<br>");
//         }
//     }
// }


// function seeTable() {
//     var rowVal = document.getElementById("noRows").value;
//     var colVal = document.getElementById("noCols").value;
//     var dispLay = "";
//     for (var i = 1; i <= rowVal; i++) {
//         for (var j = 1; j <= colVal; j++) {
//             var result = i * j
//             dispLay += i + " * " + j + " = " + result + "<br>";
//         }
//     }
//     document.getElementById("resultMssg").innerHTML = dispLay
// }

// function seeTable() {
//     var rowVal = document.getElementById("noRows").value;
//     var colVal = document.getElementById("noCols").value;
//     var dispLay = "<table>";
//     for (var i = 1; i <= rowVal; i++) {
//         dispLay += "<tr>";
//         for (var j = 1; j <= colVal; j++) {
//             dispLay += "<td>" + i + " x " + j + " = " + (i * j) + "</td>";
//         }
//         dispLay += "</tr>";
//     }
//     dispLay += "</table>";
//     document.getElementById("resultMssg").innerHTML = dispLay;
// }


function seeTable() {
    var rowVal = document.getElementById("noRows").value;
    var colVal = document.getElementById("noCols").value;
    var dispLay = "<table>";
    for (var j = 1; j <= colVal; j++) {
        dispLay += "<tr>";
        for (var i = 1; i <= rowVal; i++) {
            dispLay += "<td>" + i + " x " + j + " = " + (i * j) + "</td>";
        }
        dispLay += "</tr>";
    }
    dispLay += "</table>";
    document.getElementById("resultMssg").innerHTML = dispLay;
}
