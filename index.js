
const btn = document.getElementById("chk");

const theme = document.getElementById("theme-selector");
theme.style.transition = "all 2 s";

btn.addEventListener("click", function() {
    tiempo();
});



function tiempo(){
    tiempoEspera = setTimeout(cambioColor, 800);
}


function cambioColor() { 
    if (theme.getAttribute("href") == "light-theme.css") {
        theme.href = "dark-theme.css";
    } else {
        theme.href = "light-theme.css";
    }
}