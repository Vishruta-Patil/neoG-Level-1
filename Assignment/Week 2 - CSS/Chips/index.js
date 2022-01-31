const inputChips = document.querySelector(".input-chips");
const chipsDynamicContainer = document.querySelector(
  ".chips-dynamic-container"
);
const addChip = document.querySelector(".add-chip");
const deleteIcon = document.querySelectorAll(".material-icons");

function removeHandler(event) {
  const parentElem = event.target.parentNode;
  parentElem.remove();
}

const addHandler = (e) => {
  if (e.key=== "Enter" && inputChips.value !== "") {
    const div = document.createElement("div");
    div.classList.add("chip");
    div.innerHTML = inputChips.value

    const span = document.createElement("span");
    span.classList.add("material-icons", "delete-icon");
    span.innerHTML = "cancel";
    div.append(span);

    addChip.append(div);
    e.target.value = "";
  }
};

for (const button of deleteIcon) {
  button.addEventListener("click", function (e) {
    removeHandler(e);
  });
}

inputChips.addEventListener("keyup", addHandler);
