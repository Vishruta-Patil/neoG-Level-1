const scrollShortHeader = document.querySelector("#scroll-short-header");
const scrollShortNavbar = document.querySelector("#scroll-short-navbar");
const scrollShortContent = document.querySelector("#short-navbar-content");
const scrollShortHeading = document.querySelector(".scroll-short-heading");

const scrollHandler = () => {
    if (scrollShortHeader.scrollTop === 0) {
        scrollShortHeader.classList.remove("short-header");
        scrollShortNavbar.classList.remove("navbar-short");
        scrollShortContent.classList.remove("short-navbar-content");
        scrollShortHeading.style.display = "block";
      } else {
        scrollShortHeader.classList.add("short-header");
        scrollShortNavbar.classList.add("navbar-short");
        scrollShortContent.classList.add("short-navbar-content");
        scrollShortHeading.style.display = "none";
      }
};

scrollShortHeader.addEventListener("scroll", scrollHandler);
