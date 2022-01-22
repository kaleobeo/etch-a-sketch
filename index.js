let sketchBox = document.querySelector('.sketchbox')

let sideLength = 16
let pixel = document.createElement('div')
pixel.classList.add("pixel")
newGrid(16)




function newGrid(size) {

    sketchBox.innerHTML = ""
    sideLength = size
    sketchBox.style.gridTemplateColumns = (`repeat( ${sideLength}, 1fr)`)

    for (let i = 0; i < (sideLength**2); i++) {
        sketchBox.appendChild(pixel.cloneNode(true))
    }
}


