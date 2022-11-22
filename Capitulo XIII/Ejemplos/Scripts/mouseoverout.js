imagen1 = new Image();
imagen1.src = "encabezado1.png";
imagen2 = new Image();
imagen2.src = "encabezado2.png";
function mouseOver(e) {
    if (e.target.getAttribute("id") == "encabezado") {
        e.target.setAttribute("src", imagen2.getAttribute("src"));
    }
    if (e.target.tagName.toLowerCase() == "li") {
        e.target.setAttribute("style", "color: " + e.target.getAttribute("id"));
    }
}
function mouseOut(e) {
    if (e.target.getAttribute("id") == "encabezado") {
        e.target.setAttribute("src", imagen1.getAttribute("src"));
    }
    if (e.target.tagName.toLowerCase() == "li") {
        e.target.innerHTML = e.target.getAttribute("id");
    }
}
document.addEventListener("mouseover", mouseOver, false);
document.addEventListener("mouseout", mouseOut, false);