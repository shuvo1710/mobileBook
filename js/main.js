//
//
//
//

const share = document.getElementById("share");
const option = document.querySelector(".Option");

// 👇️ Change text color on mouseover
share.addEventListener("mouseover", function () {
  option.style.display = "flex";
});

share.addEventListener("mouseout", function () {
  option.style.display = "none";
});

option.addEventListener("mouseover", function () {
  option.style.display = "flex";
});

option.addEventListener("mouseout", function () {
  option.style.display = "none";
});

// layout
const layout = document.getElementById("layout");
layout.addEventListener("click", function () {
  alert("object");
});

//
