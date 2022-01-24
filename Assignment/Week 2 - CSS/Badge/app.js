const btn = document.querySelector(".toggle-button-with-badge");
const badge = document.querySelector(".toggle-button-with-badge-id");

const clickHandler = () => {
if(badge.style.display === "none") {
    badge.style.display = "flex"
}
else if(badge.style.display = "flex") {
    badge.style.display = "none"
}
};

btn.addEventListener("click", clickHandler);
