
const btn = document.getElementById("chk");

const theme = document.getElementById("theme-selector");

btn.addEventListener("click", function() {
    if (theme.getAttribute("href") == "light-theme.css") {
        theme.href = "dark-theme.css";
    } else {
        theme.href = "light-theme.css";
    }
});