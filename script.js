let container = document.getElementById("container");
let cols = 16;
for (let i = 0; i < cols * cols; i++) {
    let newdiv = document.createElement("div");
    newdiv.classList.add("container-items");
    container.appendChild(newdiv);

}
let toggle = false;
let newdi = document.querySelectorAll(".container-items");
for (let i = 0; i < newdi.length; i++) {
    newdi[i].addEventListener("click", function () {
        toggle = !toggle; /*when mouse clicks toggle = true which allows drawing, click again and toggle = false which prevents drawing*/
    })
    newdi[i].addEventListener("mouseover", function () {
        if (toggle == true) {
            newdi[i].classList.add("sketch");
        }
    });
}