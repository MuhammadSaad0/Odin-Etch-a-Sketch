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
function draw(e) {
    if (e.target.className == "container-items") {
        let colorselect = document.querySelector("#color").value;
        if (toggle) {
            e.target.style.setProperty("background-color", colorselect);
        }
    }
}
function togglefunc() {
    toggle = !toggle;
}
function clear() {
    destroygrid();
    creategrid(cols);
}
container.addEventListener("click", togglefunc);
container.addEventListener("mouseover", draw);
container.addEventListener("touchmove", draw);
let clearbtn = document.querySelector("#clear");
clearbtn.addEventListener("click", clear);
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
