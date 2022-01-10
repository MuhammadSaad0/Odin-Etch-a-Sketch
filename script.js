let container = document.getElementById("container");
let cols = 16;
function creategrid(cols) {
    for (let i = 0; i < cols * cols; i++) {
        let newdiv = document.createElement("div");
        newdiv.classList.add("container-items");
        container.appendChild(newdiv);


    }
}
function destroygrid() {
    for (let i = 0; i < cols * cols; i++) {
        let grid = document.getElementById("container");
        grid.innerHTML = "";

    }
}
creategrid(cols);
let toggle = false;
let newdi = document.querySelectorAll(".container-items");
function draw() {
    for (let i = 0; i < cols * cols; i++) {
        newdi[i].addEventListener("click", function () {
            toggle = !toggle; /*when mouse clicks toggle = true which allows drawing, click again and toggle = false which prevents drawing*/
        })
        newdi[i].addEventListener("mouseover", function () {
            if (toggle == true) {
                newdi[i].classList.add("sketch");
            }
        });
    }
}
draw();
let clearbtn = document.querySelector("#clear");
clearbtn.addEventListener("click", function () {
    for (let i = 0; i < newdi.length; i++) {
        newdi[i].classList.remove("sketch");
    }
})
let gridsize = document.getElementById("size").value;
console.log(gridsize);
let resizebtn = document.querySelector("#gridchange");
resizebtn.addEventListener("click", function () {
    let newsize = document.getElementById("size").value;
    cols = newsize;
    console.log(cols);
    destroygrid();
    document.documentElement.style.setProperty("--cols", cols);
    creategrid(newsize);
})
