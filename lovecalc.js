function calcLove() {
    var love = document.getElementById("firstName").value;
    var lover = document.getElementById("scndName").value;
    var loveCalculation = Math.round(Math.random() * 100);
    if (loveCalculation >= 90) { document.getElementById("rsultMssg").innerHTML = love + " and " + lover + ", There is nothing sweeter than young love. Congratulations, yours has a " + loveCalculation + "%" + " chance of survival" }
    else if (loveCalculation >= 70) { document.getElementById("rsultMssg").innerHTML = love + " and " + lover + ", Everything in life demands hard work and consistency, and yours is evident, your love has a " + loveCalculation + "%" + " chance of survival" }
    else if (loveCalculation >= 50) { document.getElementById("rsultMssg").innerHTML = love + " and " + lover + ", Talk is cheap, do better before time runs out, your love has a " + loveCalculation + "%" + " chance of survival" }
    else { document.getElementById("rsultMssg").innerHTML = love + " and " + lover + ", Wisdom comes with hindsight and you should have a rethink, your love has only a " + loveCalculation + "%" + " chance of survival" }
}