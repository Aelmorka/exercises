function validateName(name) {
    let res
    if (RegExp('^.{2,}$').test(name) != true) {
        res = 'Name should be aat least 3 symbols'
    } else {
        res = 'ok'
    }
    return res
}

function validatePhone(phone) {
    let res = ''
    if (RegExp('^[0-9]*$').test(phone) != true) res = 'Phone sould consisit only from digits. '
    if (RegExp('^.{10}$').test(phone) != true) res += 'Phone should be 10 digits long.'
    if (RegExp('[0-9]{10}').test(phone)) res = 'ok'
    return res
}

function validateDate(date) {
    return date == '' ? 'Birthday is requiered' : 'ok'
}

function validateSalary(salary) {
    let res = 'ok'
    if (salary >= 16000) {
        res = 'Salary is too big' 
    } else if (salary <= 10000) {
        res = 'Salary is too small'
    }
    return res
}

function createError(text) {
    let error = document.createElement("p")
    error.innerHTML = text
    error.style.color = 'red'
    return error
}

function createErrorDiv(validation) {
    let div = document.getElementById("errors")
    if (div) {
        div.innerHTML = ''
    } else {
        div = document.createElement("div")
        div.id = 'errors'
    }
    for (key in validation) {
        if (validation[key] != 'ok') {
            div.appendChild(createError(validation[key]))
        }
    }
    return div.innerHTML != '' ? div : 'ok'
}

let submit = document.getElementById("submit")

function validate() {
    let name = document.getElementById("name")
    let phone = document.getElementById("phone")
    let date = document.getElementById("birthday")
    let salary = document.getElementById("salary")
    let validation = {
        name: null,
        phone: null,
        date: null,
        salary: null
    }
    validation.name = validateName(name.value)
    validation.phone = validatePhone(phone.value)
    validation.date = validateDate(date.value)
    validation.salary = validateSalary(salary.value)
    let errors = createErrorDiv(validation)
    if (errors == 'ok') {
        let cont = document.getElementById("container")
        cont.classList.add("hidden")
        let congrats = document.getElementById("congrats")
        congrats.innerHTML = `Welcome, ${name.value}`
        congrats.classList.remove("hidden")
    } else {
        document.body.appendChild(errors)
    }
}

submit.onclick = validate