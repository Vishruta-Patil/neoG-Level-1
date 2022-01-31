const dissmisibleMenuBtn = document.querySelector(".dissmisible-menu-btn");
const permanentDrawerContainer = document.querySelector(
  "#dissmisible-drawer-container"
);
const sideDissmisibleDrawer = document.querySelector(
  "#side-dissmisible-drawer"
);

const modalMenuBtn = document.querySelector(".modal-menu-btn");
const modalSideDrawer = document.querySelector(".modal-side-drawer");
const heroContainer = document.querySelector(".hero-container");
const innerContainerDrawer = document.querySelectorAll(
  ".inner-container-drawer"
);
const modalDrawerContainer = document.querySelector(".modal-drawer-container");
const contentsDrawer = document.querySelector(".contents-drawer");

dissmisibleMenuBtn.addEventListener("click", () => {
  if (sideDissmisibleDrawer.classList.contains("hide-container")) {
    permanentDrawerContainer.classList.remove("dissmisible-drawer-container");
    sideDissmisibleDrawer.classList.remove("hide-container");
  } else {
    permanentDrawerContainer.classList.add("dissmisible-drawer-container");
    sideDissmisibleDrawer.classList.add("hide-container");
  }
});


modalDrawerContainer.addEventListener("click", (e) => {
  if (e.target.id === "modal-btn") {
    modalSideDrawer.classList.remove("hide-modal-drawer");
  } else if (e.target.id != "shree-krishna") {
    modalSideDrawer.classList.add("hide-modal-drawer");
  }
});

const activeEventHandler = (e) => {
  innerContainerDrawer.forEach((unit) => {
    unit.classList.remove("active");
    e.target.classList.add("active");
  });
};

heroContainer.addEventListener("click", activeEventHandler);
