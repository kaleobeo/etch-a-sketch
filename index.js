let sketchBox = document.querySelector('.sketchbox')

let sideLength = 16
let pixel = document.createElement('div')
pixel.classList.add("pixel")
newGrid(16)




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

sketchBox.addEventListener('mouseover', (e) => e.target.classList.add('hover'))


