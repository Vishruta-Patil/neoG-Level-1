const alertDialog = document.querySelector("#alert-dialog");
const basicDialog = document.querySelector("#basic-dialog");
const confirmationDialog = document.querySelector("#confirmation-dialog");

const alertDialogBtn = document.querySelector(".alert-dialog-btn");
const basicDialogBtn = document.querySelector(".basic-dialog-btn");
const confirmationDialogBtn = document.querySelector(
  ".confirmation-dialog-btn"
);

alertDialogBtn.addEventListener("click", () => {
  basicDialog.classList.add("hide-container");
  confirmationDialog.classList.add("hide-container");

  if (alertDialog.classList.contains("hide-container")) {
    alertDialog.classList.remove("hide-container");
  } else {
    alertDialog.classList.add("hide-container");
  }
});

basicDialogBtn.addEventListener("click", () => {
  alertDialog.classList.add("hide-container");
  confirmationDialog.classList.add("hide-container");

  if (basicDialog.classList.contains("hide-container")) {
    basicDialog.classList.remove("hide-container");
  } else {
    basicDialog.classList.add("hide-container");
  }
});

confirmationDialogBtn.addEventListener("click", () => {
  basicDialog.classList.add("hide-container");
  alertDialog.classList.add("hide-container");

  if (confirmationDialog.classList.contains("hide-container")) {
    confirmationDialog.classList.remove("hide-container");
  } else {
    confirmationDialog.classList.add("hide-container");
  }
});
