

const container = document.querySelector(".container")
const tabList = document.querySelectorAll(".tab")
const conntentList = document.querySelectorAll(".content")

container.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if(id) {
        tabList.forEach(function (tab) {
            tab.classList.remove("active")
            e.target.classList.add("active")
        })

        conntentList.forEach(function (content) {
            content.classList.remove("active")
        })

        const el = document.getElementById(id)
        el.classList.add("active")
    }
})