// function expand(div) {
//     var item = div.parentElement;
//     var content = item.querySelector('.content');
//     var minusplus = div.querySelector('.plusminus')
//     if (content.style.display === "none" || content.style.display === "") {
//         content.style.display = "flex";
//         minusplus.innerHTML = 'x';
//     } else {
//         content.style.display = "none";
//         minusplus.innerHTML = '+';
//     }
// }

function expand(itemId) {
    var item = document.getElementById(itemId);
    var content = item.querySelector('.content');
    var plusminus = item.querySelector('.plusminus');

    var allContents = document.querySelectorAll('.content');
    var allPlusMinus = document.querySelectorAll('.plusminus');

    for (var i = 0; i < allContents.length; i++) {
        if (allContents[i] !== content) {
            allContents[i].style.display = "none";
            allPlusMinus[i].innerHTML = '+';
        }
    }

    if (content.style.display === "none") {
        content.style.display = "flex";
        plusminus.innerHTML = 'x';
    } else {
        content.style.display = "none";
        plusminus.innerHTML = '+';
    }
}


