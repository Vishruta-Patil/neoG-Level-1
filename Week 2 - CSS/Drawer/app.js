const dissmisibleMenuBtn = document.querySelector(".dissmisible-menu-btn");
const permanentDrawerContainer = document.querySelector(
  "#dissmisible-drawer-container"
);
const sideDissmisibleDrawer = document.querySelector(
  "#side-dissmisible-drawer"
);

const modalMenuBtn = document.querySelector(".modal-menu-btn");
const modalSideDrawer = document.querySelector(".modal-side-drawer");

dissmisibleMenuBtn.addEventListener("click", () => {
  if (sideDissmisibleDrawer.classList.contains("hide-container")) {
    permanentDrawerContainer.classList.remove("dissmisible-drawer-container");
    sideDissmisibleDrawer.classList.remove("hide-container");
  } else {
    permanentDrawerContainer.classList.add("dissmisible-drawer-container");
    sideDissmisibleDrawer.classList.add("hide-container");
  }
});

modalMenuBtn.addEventListener("click", (event) => {
  modalSideDrawer.classList.remove("hide-modal-drawer")
  // var isClickInsideElement = modalSideDrawer.contains(event.target);
  // if (!isClickInsideElement) {
  //   Console.log("helo");
  //   modalSideDrawer.classList.add("hide-modal-drawer");
  // }
});
