const toTop = document.querySelector(".scroll");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
//   document.body.classList.toggle("dark");
var element = document.getElementById("container");
element.classList.toggle("dark");
var element2 = document.getElementById("lightdark");
if (element2.innerHTML === "Light Mode") {
    element2.innerHTML = "Dark Mode";
  } else {
    element2.innerHTML = "Light Mode";
  }
  var element3 = document.getElementById("ball");
  element3.classList.toggle("dark");
});
