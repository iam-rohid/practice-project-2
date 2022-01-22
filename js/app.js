const navigationBar = document.getElementById("nav-bar");
const fullscreenNav = document.getElementById("fullscreen-nav");
const fullScreenNavCloseBtns =
  document.getElementsByClassName("fs-window-close");
const fullScreenNavOpenBtn = document.getElementById("fs-nav-open-btn");

let stickyNav = false;
let fullScreenNavShowing = false;

function onScorll() {
  if (!stickyNav && scrollY > 0) {
    stickyNav = true;
    navigationBar.classList.add("sticky");
  }

  if (stickyNav && scrollY === 0) {
    stickyNav = false;
    navigationBar.classList.remove("sticky");
  }
}
window.addEventListener("scroll", onScorll);

fullScreenNavOpenBtn.addEventListener("click", () => {
  if (!fullScreenNavShowing) {
    fullScreenNavShowing = true;
    fullscreenNav.classList.add("show");
    document.documentElement.classList.add("disable-scroll");
  }
});

for (i = 0; i < fullScreenNavCloseBtns.length; i++) {
  fullScreenNavCloseBtns[i].addEventListener("click", () => {
    if (fullScreenNavShowing) {
      fullScreenNavShowing = false;
      fullscreenNav.classList.remove("show");
      document.documentElement.classList.remove("disable-scroll");
    }
  });
}
