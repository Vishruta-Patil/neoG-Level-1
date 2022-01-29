const inputChips = document.querySelector(".input-chips");
const chipsDynamicContainer = document.querySelector(
  ".chips-dynamic-container"
);
const addChip = document.querySelector(".add-chip");
const deleteIcon = document.querySelector(".delete-icon");

const addHandler = (e) => {
  let value = e.target.value;

  const div = document.createElement("div");
  //   div.setAttribute("class", "chip");
  div.classList.add("chip");
  div.classList.add("delete-icon");

  div.innerHTML = value;

  const span = document.createElement("span");
  span.setAttribute("class", "material-icons");
  span.innerHTML = "cancel";

  div.append(span);

  if (e.keyCode === 13 && value != "") {
    addChip.append(div);
    e.target.value = ""
  }
};


inputChips.addEventListener("keyup", addHandler);

