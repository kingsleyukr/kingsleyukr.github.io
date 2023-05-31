const sectOneOne = document.querySelector(".section1_1");
const sectOneTwo = document.querySelector(".section1_2");
const toTop = document.querySelector(".to-top");
const dropdownmenu = document.querySelector(".dropdown-icon");

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  sectOneOne.style.transform = `translateY(${offsetY * 0.1}px)`;
  sectOneTwo.style.transform = `translate(${offsetY * 0.4}px, ${
    offsetY * 0.7
  }px)`;
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

dropdownmenu.addEventListener("click", () => {
  let bars = document.querySelector("#dropdown-click");
  bars.className === "navbar"
    ? (bars.className += " responsive")
    : (bars.className = "navbar");
});
