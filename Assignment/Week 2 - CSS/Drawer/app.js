const dissmisibleMenuBtn = document.querySelector(".dissmisible-menu-btn");
const permanentDrawerContainer = document.querySelector(
  "#dissmisible-drawer-container"
);
const sideDissmisibleDrawer = document.querySelector(
  "#side-dissmisible-drawer"
);

const modalMenuBtn = document.querySelector(".modal-menu-btn");
const sideModalDrawer = document.querySelector("#side-modal-drawer");

// const hello = document.querySelector(".menu-btn")

dissmisibleMenuBtn.addEventListener("click", () => {
  if (sideDissmisibleDrawer.classList.contains("hide-container")) {
    permanentDrawerContainer.classList.remove("dissmisible-drawer-container");
    sideDissmisibleDrawer.classList.remove("hide-container");
  } else {
    permanentDrawerContainer.classList.add("dissmisible-drawer-container");
    sideDissmisibleDrawer.classList.add("hide-container")
  }
});

modalMenuBtn.addEventListener('click', () => {
  console.log("modal")
  sideModalDrawer.classList.remove("hide-container")
})



// hello.addEventListener('click', ()=> {
//   alert("clicked on new modal")
// })
