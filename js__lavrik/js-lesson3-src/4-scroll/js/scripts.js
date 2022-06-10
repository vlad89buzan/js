window.addEventListener("load", function () {
  let menu = document.querySelector(".menu");
  let activeLink = "menu__link-active";

  if (window.location.hash != "") {
    scrollToId(window.location.hash);
  }

  menu.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu__link")) {
      e.preventDefault();
      let link = e.target;
      scrollToId(link.hash);

      menu.querySelector(`.${activeLink}`).classList.remove(activeLink);
      link.classList.add(activeLink);
    }
  });
  
  window.addEventListener("scroll", function (e) {
    let links = document.querySelectorAll(".menu__link");
    let position = window.pageYOffset;
    for (let i = links.length - 1; i >= 0; i--) {
      let link = links[i];
      let header = document.querySelector(link.hash);
      // if (position > elemOffsetTop(header) - menu.clientHeight - 200)
      if (position > elemOffsetTop(header) - window.innerHeight / 2) {
        menu
          .querySelector(".menu__link-active")
          .classList.remove("menu__link-active");
        link.classList.add("menu__link-active");
        break;
      }
    }
  });
});

function elemOffsetTop(node) {
  let coords = node.getBoundingClientRect();
  return coords.top + window.pageYOffset;
}
function scrollToId(id) {
  let target = document.querySelector(id);
  let menu = document.querySelector(".menu");
  let styles = window.getComputedStyle(target);

  if (target !== null) {
    let position =
      elemOffsetTop(target) - menu.clientHeight - parseFloat(styles.marginTop);

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  }
}
//scrolltotop
window.onscroll = function enableToTop() {
  let toTop = document.querySelector(".toTop");

  if (
    (document.body.scrollTop || document.documentElement.scrollTop) >
    window.innerHeight
  ) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
  toTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
