people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]

function capitalize(str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase();
    capitalizedStr += str.slice(1)
    return capitalizedStr
}

function getAge(num) {
    if (num < 21) return "an underage"
    else if (num > 55) return "a 55+"
    return num + ' year old'
}

function getProfession(str) {
    let arr = str.split(' ')
    let profession = ''
    for (let i = 0; i < arr.length; i++) {
        profession += capitalize(arr[i])
        if (i != arr.length) profession += ' '
    }
    return profession
}

function getCoutryCity(country, city) {
    return `from ${capitalize(country)}, ${capitalize(city)}. ` 
}

function getCatchfrase(name, phrase) {
    return `${capitalize(name)} likes to say "${capitalize(phrase)}"`
}

function getSummary(person) {
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} `
    summary += getProfession(person.profession)
    summary += getCoutryCity(person.country, person.city)
    summary += getCatchfrase(person.name, person.catchphrase)
    console.log(summary)
}

for (let i = 0; i < people_info.length; i++) {getSummary(people_info[i])}
