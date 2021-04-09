const header = document.getElementById("header");

window.onscroll = function () {
  let sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

