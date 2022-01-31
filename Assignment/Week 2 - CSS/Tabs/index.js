const container = document.querySelector(".container");
const tabList = document.querySelectorAll(".tab");
const conntentList = document.querySelectorAll(".content");

const scrollableTabList = document.querySelectorAll(".scrollable-tab");
const scrollableContentList = document.querySelectorAll(".scrollable-content");

const scrollableTabsContainer = document.querySelector(".scrollable-tabs-container");

scrollableTabsContainer.addEventListener('click', (e)=> {
  const scrollableId = e.target.dataset.scrollable;
  console.log(scrollableId)
})

container.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  const scrollableId = e.target.dataset.scrollable;

  // console.log(id);
  // console.log("scroll " + scrollableId);

  if (scrollableId) {
    scrollableTabList.forEach(function (tab) {
      tab.classList.remove("active");
      e.target.classList.add("active");
    });

    scrollableContentList.forEach(function (content) {
      content.classList.remove("active");
    });

    const el = document.getElementById(scrollableId);
    el.classList.add("active");
  }

  if (id) {
    tabList.forEach(function (tab) {
      tab.classList.remove("active");
      e.target.classList.add("active");
    });

    conntentList.forEach(function (content) {
      content.classList.remove("active");
    });

    const el = document.getElementById(id);
    el.classList.add("active");
  }
});
