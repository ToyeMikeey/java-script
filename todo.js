
// document.querySelector('.listdisplay h1').style.display = "none";

// function enterItem() {

//     var listitem = document.getElementById("listEntry").value;
//     if (listitem !== "") {
//         var storage = document.createElement('h1');

//         var storeditem = document.createTextNode(listitem);

//         storage.appendChild(storeditem);

//         document.querySelector(".listdisplay").appendChild(storage);

//         var allH1s = document.querySelectorAll('.listdisplay h1');
//         for (var i = 0; i < allH1s.length; i++) {
//             allH1s[i].style.display = "block";
//             allH1s[i].style.border = "1px solid black";
//         }
//         document.getElementById("listEntry").value = "";
//     }
// }

// document.querySelector('.listdisplay h1').style.display = "none";

// function enterItem() {

//     var listitem = document.getElementById("listEntry").value;
//     if (listitem !== "") {
//         var tdlist = document.createElement('div');
//         var storage = document.createElement('h1');

//         var storeditem = document.createTextNode(listitem);

//         storage.appendChild(storeditem);
//         var tickbttn = document.createElement('input');
//         tickbttn.type = 'radio';
//         var closebttn = document.createElement('button');
//         closebttn.onclick = function () {
//             container.remove();
//         };
//         tdlist.appendChild('storage');
//         tdlist.appendChild('tickbttn');
//         tdlist.appendChild('closebttn');

//         document.querySelector(".listdisplay").appendChild(tdlist);

//         var allH1s = document.querySelectorAll('.listdisplay h1');
//         for (var i = 0; i < allH1s.length; i++) {
//             allH1s[i].style.display = "block";
//             allH1s[i].style.border = "1px solid black";
//         }
//         document.getElementById("listEntry").value = "";
//     }
// }



// document.querySelector('.listdisplay h1').style.display = "none";

// function enterItem() {
//     var listitem = document.getElementById("listEntry").value;
//     if (listitem !== "") {
//         var tdlist = document.createElement('div');
//         var tickbttn = document.createElement('input');
//         tickbttn.type = 'checkbox';
//         var storage = document.createElement('h1');
//         var closebttn = document.createElement('button');
//         closebttn.innerHTML = 'X';
//         closebttn.onclick = function () {
//             tdlist.innerHTML = " ";
//         };
//         var storeditem = document.createTextNode(listitem);
//         storage.appendChild(storeditem);

//         tickbttn.onclick = function () {
//             if (tickbttn.checked) {
//                 storage.style.textDecoration = "line-through";
//             } else {
//                 storage.style.textDecoration = "none";
//             }
//         };

//         tdlist.appendChild(storage);
//         tdlist.appendChild(tickbttn);
//         tdlist.appendChild(closebttn);

//         document.querySelector(".listdisplay").appendChild(tdlist);


//         var allH = document.querySelectorAll('.listdisplay h1');
//         for (var i = 0; i < allH.length; i++) {
//             allH[i].style.display = "block";
//             allH[i].style.border = "1px solid black";
//         }

//         document.getElementById("listEntry").value = "";
//     }
// }



function enterItem() {
    var listitem = document.getElementById("listEntry").value;

    if (listitem !== "") {
        var tdlist = document.createElement('div');
        tdlist.className = 'list-display';
        var tickbttn = document.createElement('input');
        tickbttn.type = 'checkbox';
        tickbttn.className = 'check-item';
        var storage = document.createElement('h1');
        var storeditem = document.createTextNode(listitem);
        storage.appendChild(storeditem);

        var closebttn = document.createElement('button');
        closebttn.innerHTML = 'X';
        closebttn.className = 'close-button';
        closebttn.onclick = function () {
            tdlist.remove();
        };
        tickbttn.onclick = function () {
            if (tickbttn.checked) {
                storage.style.textDecoration = "line-through";
            } else {
                storage.style.textDecoration = "none";
            }
        };

        tdlist.appendChild(tickbttn);
        tdlist.appendChild(storage);
        tdlist.appendChild(closebttn);

        document.querySelector('.con').appendChild(tdlist);

        document.getElementById("listEntry").value = '';
    }
}
