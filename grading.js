function seeResults() {
    var userNa = document.getElementById("fullNam").value;
    var mathsScr = parseInt(document.getElementById("maths").value);
    var engScr = parseInt(document.getElementById("engl").value);
    var chemScr = parseInt(document.getElementById("chem").value);
    var physcScr = parseInt(document.getElementById("physc").value);
    var bioScr = parseInt(document.getElementById("bio").value);
    var crsScr = parseInt(document.getElementById("crs").value);
    if (isNaN(mathsScr) || isNaN(engScr) || isNaN(chemScr) || isNaN(physcScr) || isNaN(bioScr) || isNaN(crsScr)) {
        alert("Please enter valid scores for all subjects.");
        return;
    }
    var resultTotal = mathsScr + engScr + chemScr + physcScr + bioScr + crsScr;
    var perCent = resultTotal / 6;

    if (perCent >= 80) {
        document.getElementById("resultMssg").innerHTML =
            "Welcome " + userNa + ", your total score in the 2024 winter exam is " + resultTotal + "/600, leaving your percentage obtained at " + perCent.toFixed(2) + "%" + ". Congratulations, you have finished with an A overall"
    }
    else if (perCent >= 70) {
        document.getElementById("resultMssg").innerHTML =
            "Welcome " + userNa + ", your total score in the 2024 winter exam is " + resultTotal + "/600, leaving your percentage obtained at " + perCent.toFixed(2) + "%" + ". You are amazing, you finished with a B overall "
    }

    else if (perCent >= 60) {
        document.getElementById("resultMssg").innerHTML =
            "Welcome " + userNa + ", your total score in the 2024 winter exam is " + resultTotal + "/600, leaving your percentage obtained at " + perCent.toFixed(2) + "%" + ". Better luck next time, you finished with a C overall "
    }
    else if (perCent >= 50) {
        document.getElementById("resultMssg").innerHTML =
            "Welcome " + userNa + ", your total score in the 2024 winter exam is " + resultTotal + "/600, leaving your percentage obtained at " + perCent.toFixed(2) + "%" + ". Better luck next time, you finished with a D overall "
    }
    else {
        document.getElementById("resultMssg").innerHTML =
        "Welcome " + userNa + ", your total score in the 2024 winter exam is " + resultTotal + "/600, leaving your percentage obtained at " + perCent.toFixed(2) + "%" + ". Unfortunately, you finished with a F, and will need to retake this course "
    }
} 
