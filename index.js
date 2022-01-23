let sketchBox = document.querySelector('.sketchbox')

let sideLength = 16
let pixel = document.createElement('div')
pixel.classList.add("pixel")
let mode = "normal"
newGrid(16)


function randomRGB() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + "," + g + "," + b + ")"
}

function newGrid(size) {

    sketchBox.innerHTML = ""
    let sideLength
    if (size > 100) {
        sideLength = 100
    } else {
        sideLength = size
    }
    sketchBox.style.gridTemplateColumns = (`repeat( ${sideLength}, 1fr)`)

    for (let i = 0; i < (sideLength**2); i++) {
        sketchBox.appendChild(pixel.cloneNode(true))
    }
}

sketchBox.addEventListener('mouseover', (e) => {
    if (mode === "normal") {
        e.target.classList.add('hover')
    } else if (mode === "random") e.target.style.backgroundColor = `${randomRGB()}`
});


