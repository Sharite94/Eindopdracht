let toggleNavStatus = true;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUL = document.querySelector(".nav-sidebar ul");
  let getSidebarTittle = document.querySelector(".nav-sidebar span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === true) {
    getSidebarUL.style.visibility = "visible";
    getSidebar.style.width = "150px";
    getSidebarTittle.style.opacity = "0.5";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = false;
  } else if (toggleNavStatus === false) {
    getSidebarUL.style.visibility = "hidden";
    getSidebar.style.width = "50px";
    getSidebarTittle.style.opacity = "0";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    toggleNavStatus = true;
  }
};

const changebackground = document.querySelector("#home");

changebackground.addEventListener("click", function () {
  document.body.style.backgroundColor = "#f1f1f1";
  toggleNav();
});

const changebackground1 = document.querySelector("#red");

changebackground1.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  toggleNav();
});

const changebackground2 = document.querySelector("#orange");

changebackground2.addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
  toggleNav();
});

const changebackground3 = document.querySelector("#purple");

changebackground3.addEventListener("click", function () {
  document.body.style.backgroundColor = "purple";
  toggleNav();
});

const changebackground4 = document.querySelector("#green");

changebackground4.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  toggleNav();
});

document.getElementById("green").style.backgroundColor = "green";
document.getElementById("purple").style.backgroundColor = "purple";
document.getElementById("red").style.backgroundColor = "red";
document.getElementById("orange").style.backgroundColor = "orange";
document.getElementById("home").style.backgroundColor = "#1b1b1b";

// SHort version changebackground

// const changebg = document.querySelectorAll('#menubtn')

// changebg.forEach(btn => {

//     btn.addEventListener('click', event => {
//         toggleNav()
//         switch (event.target.dataset.color) {
//             case 'red':
//                 document.body.style.backgroundColor = "red"
//                 return;
//             case 'orange':
//                 document.body.style.backgroundColor = "orange"
//                 return;
//             case 'purple':
//                 document.body.style.backgroundColor = "purple"
//                 return;
//             case 'green':
//                 document.body.style.backgroundColor = "green"
//                 return;
//         }
//     });
// });
