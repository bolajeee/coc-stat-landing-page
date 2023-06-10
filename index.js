let menu = document.getElementById("menu-icon");
let navlist = document.getElementsByClassName("nav-listt");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");

  console.log("fgfg");

  if (menu.classList.contains("bx-x")) {
    document.getElementById("ll").style.display = "flex";
  } else {
    document.getElementById("ll").style.display = "none";
  }
});

const sr = ScrollReveal({
  distance: "85px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".hero-text", { delay: 200, origin: "top" });
sr.reveal(".hero-img", { delay: 450, origin: "top" });
sr.reveal(".icons", { delay: 500, origin: "left" });
sr.reveal(".scroll-down", { delay: 500, origin: "bottom" });
sr.reveal(".nav-list", { delay: 200, origin: "right" });
