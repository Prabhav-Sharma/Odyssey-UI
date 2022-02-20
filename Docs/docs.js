const sidebar = document.getElementById("sidebar");
const navBtn = document.getElementById("nav-button");
const mainSection = document.getElementById("main-section");
const article = document.getElementById("article");
const modeBtn = document.getElementById("mode-btn");

//runs the changeMode function once when the page gets loaded.
window.onload=function(){
    changeMode();
}

//Changes mode depending on the existing value of darkMode, if value doesn't exist. It adds the value
modeBtn.addEventListener("click", () => {
    if (window.localStorage.getItem("darkMode")) {
        let darkMode = JSON.parse(window.localStorage.getItem("darkMode"));
        window.localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    } else {
        window.localStorage.setItem("darkMode", true);
    }
    changeMode();
});

//Changes color variables to change mode.
const changeMode = () => {
    if (JSON.parse(localStorage.getItem("darkMode"))) {
        document.documentElement.style.setProperty('--white', '#313335');
        document.documentElement.style.setProperty('--black', '#FEFEFF');
        modeBtn.childNodes[0].src="/Assets/sun.png";
    } else {
        document.documentElement.style.setProperty('--white', '#FEFEFF');
        document.documentElement.style.setProperty('--black', '#1A181B');
        modeBtn.childNodes[0].src="/Assets/moon.png";
    }
}

//Checks to see if screen width is less than 880px, calls to toggle the sidebar automatically
const intervalID = setInterval(() => {
    if (window.innerWidth <= 880) toggle();
}, 2500);

//Already implemented CSS classes to toggle sidebar
const toggle = () => {
    if (sidebar.className == "sidebar") {
        sidebar.className = "sidebar-toggle";
        article.className = "flex-column article-toggle";
        clearInterval(intervalID);
    } else {
        sidebar.className = "sidebar";
        article.className = "flex-column";
    }
};

navBtn.addEventListener("click", toggle);

//for highlighting code using highlight.js
hljs.highlightAll();