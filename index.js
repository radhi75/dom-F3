// var main = document.getElementById("main");
var main = document.querySelector("#main");

// console.log(main);

// var title = document.getElementsByTagName("h1");
// var title = document.querySelector("h1");
// title[1].style.color = "red";
// console.log(title);

// var para = document.querySelector(".para").innerHTML;
// var par = document.querySelector(".para").innerText;
// console.log(para);
// console.log(par);

// var element = document.createElement("h1");
// element.innerText = "bonjour";
// title.appendChild(element);
// var parag = document.createElement("p");
// parag.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet
//         doloribus possimus numquam sit atque pariatur. Nobis, culpa obcaecati
//         sed velit, assumenda, id deleniti ab saepe harum fuga blanditiis
//         veritatis!`;
// main.appendChild(parag);

// var name = "";

// function getname() {
//   var input = document.getElementById("fname");
//   name = input.value;
// }
// function hello() {
//   if (name) {
//     console.log("hello" + " " + name);
//   } else {
//     console.log("enter name");
//   }
// }

// var btnplus = document.querySelectorAll(".btnplus");

// for (let i = 0; i < btnplus.length; i++) {
//   btnplus[i].addEventListener("click", function () {
//     btnplus[i].nextElementSibling.innerHTML++;
//   });
// }
var btnplus = document.querySelectorAll(".btnplus");
var qtes = document.querySelectorAll(".counter");
for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", function () {
    qtes[i].innerHTML++;
    test();
  });
}
// var btnminus = document.querySelectorAll(".btnminus");

// for (let i = 0; i < btnminus.length; i++) {
//   btnminus[i].addEventListener("click", function () {
//     if (btnminus[i].previousElementSibling.innerHTML > 0) {
//       btnminus[i].previousElementSibling.innerHTML--;
//     }
//   });
// }
var btnminus = document.querySelectorAll(".btnminus");
var qtes = document.querySelectorAll(".counter");
for (let i = 0; i < btnminus.length; i++) {
  btnminus[i].addEventListener("click", function () {
    if (qtes[i].innerHTML > 0) {
      qtes[i].innerHTML--;
      test();
    }
  });
}

var total = document.getElementById("total");
function test() {
  for (let i = 0; i < qtes.length; i++) {
    return (total.innerHTML =
      Number(qtes[i].innerHTML) + Number(total.innerHTML));
    console.log("qtes", qtes[i].innerHTML);
    console.log("total", total.innerHTML);
  }
}
console.log(test());
