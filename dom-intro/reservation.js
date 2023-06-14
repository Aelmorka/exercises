function reservation(name) {
    const reservations = {
        bob: { claimed: false, name: 'Bob'},
        ted: { claimed: true, name: 'Ted' }
    }

    if (reservations[name.toLowerCase()]) {
        if (reservations[name.toLowerCase()].claimed) {
            return 'claimed'
        } else {
            return reservations[name.toLowerCase()].name
        }
    } else {
        reservations[name.toLowerCase()] = {'claimed': true, name: name}
        return 'added'
    }
}

let container = document.getElementById("container")
let input = document.getElementById("name-input")
let checkButton = document.getElementById("j-check")
let reset = document.getElementById("j-again")
let div = document.getElementById("answer")

checkButton.onclick = function() {
    let res = reservation(input.value)
    let result = document.createElement("p")
    container.classList.add("hidden")
    if (res == 'claimed') {
        result.innerHTML = 'Hmm, someone already claimed this reservation'
    } else if (res == 'added') {
        result.innerHTML = `Welcome, ${input.value}, now you have a reservation`
    } else {
        result.innerHTML = `Welcome, ${res}, we waited for you!`   
    }
    div.appendChild(result)
    div.classList.remove("hidden")
    reset.classList.remove("hidden")
}

reset.onclick = function() {
    container.classList.remove("hidden")
    input.value = ''
    div.classList.add("hidden")
    div.innerHTML = ''
    reset.classList.add("hidden")
}
