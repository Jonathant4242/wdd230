function toggleMenu() {
  document.getElementById("mainNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;



// console.log("it worked")
// }
// const x = document.getElementById("hamburgerBtn")
// x.onclick = toggleMenu;