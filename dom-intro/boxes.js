function randomColor() {
    let color
    //const niceColors = ["#8e44ad"]
    const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    color = niceColors[Math.floor(Math.random() * niceColors.length)];
    return color
}

function createBox(num) {
    let box = document.createElement("div")
    box.innerHTML = `box #${num}`
    box.id = `box${num}`
    box.style.width = Math.floor(Math.random() * 20 + 50) + 'px'
    box.style.backgroundColor = randomColor()
    return box
}

function main() {
    let container = document.getElementById("container")
    let sameColor = true
    let prevColor = 0, curColor = 0
    for (i = 1; i < 4; i++) {
        container.appendChild(createBox(i))
        curColor = document.getElementById(`box${i}`).style.backgroundColor
        if (i == 1) { prevColor = curColor }
        if (curColor != prevColor) { sameColor = false }
    }
    if (sameColor) {
        let congrats = document.createElement("p")
        congrats.innerHTML = "Nice job!"
        container.appendChild(congrats)
    }
}

main()