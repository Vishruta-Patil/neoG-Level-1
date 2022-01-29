const snackbarSection= document.querySelector(".snackbar")
const snackbarCloseBtn = document.querySelector(".snackbar-close-btn");
const baselineBtn = document.querySelector(".baseline-btn")
const leadingBtn = document.querySelector(".leading-btn")
const stackedBtn= document.querySelector(".stacked-btn")
const snackbarStackContainer = document.querySelector(".snackbar-stack")
const snackbarStackCloseBtn = document.querySelector(".snackbar-stack-close-btn")

const snackbarCloseHandler  = (event) => {
    // const parentElem = event.target.parentNode;
    // console.log(parentElem)
    // parentElem.style.display = "none"
    snackbarSection.style.display = "none";
}

const snackbarStackCloseHandler = (event) => {
    snackbarStackContainer.style.display = "none";
}

const baselineBtnHandler = () => {
    snackbarSection.style.display = "flex";
    snackbarSection.classList.add("snackbar-baseline-btn")
}

const leadingBtnHandler = () => {
    snackbarSection.style.display = "flex";
    snackbarSection.classList.remove("snackbar-baseline-btn")
}

const stackedBtnHandler = () => {
    snackbarStackContainer.style.display = "flex";
    snackbarStackContainer.classList.add("snackbar-baseline-btn")
}



snackbarCloseBtn.addEventListener('click', snackbarCloseHandler)
baselineBtn.addEventListener('click', baselineBtnHandler)
leadingBtn.addEventListener('click', leadingBtnHandler)
stackedBtn.addEventListener('click', stackedBtnHandler)
snackbarStackCloseBtn.addEventListener('click', snackbarStackCloseHandler)