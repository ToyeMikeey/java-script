function number(x) {
    document.getElementById("display").value += x;
}

function operator(x) {
    document.getElementById("display").value += x;
}

function delet() {
    document.getElementById("display").value = '';
}

function equall() {
    var equalll = document.getElementById("display").value;
    var result = eval(equalll);
    document.getElementById("display").value = result;
}
