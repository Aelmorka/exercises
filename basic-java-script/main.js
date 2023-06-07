function objectKeys() {
    const dictionary = {
        "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
        "B": ["Banana", "Bonkers", "Brain", "Bump"],
        "C": ["Callous", "Chain", "Coil", "Czech"]
    }
    for (let i = 0; i < Object.keys(dictionary).length; i++) {
        console.log('Words that begin with ' + Object.keys(dictionary)[i])
        for (let j = 0; j < dictionary[Object.keys(dictionary)[i]].length; j++) {
            console.log(dictionary[Object.keys(dictionary)[i]][j])
        }
    }
}

function findComment(postId) {
    const posts = [
        {
          id: 1, 
          text: "Love this product",
          comments: []
        },
        { 
          id: 2, 
          text: "This is the worst. DON'T BUY!", 
          comments: [
                      {id: 1, text: "Idiot has no idea"}, 
                      {id: 2, text:"Fool!"}, 
                      {id: 3, text: "I agree!"}
                    ]
         },
         {
          id: 3, 
          text: "So glad I found this. Bought four already!",
          comments: []
         }
    ]
    let postIndex, commentIndex
    postIndex = posts.findIndex(post => post.id == postId)
    commentIndex = posts[postIndex].comments.findIndex(comment => comment.id == 3)
    console.log(posts[postIndex].comments[commentIndex].text)

}

function censor() {
    const posts = [
        {id: 1, text: "Love this product"},
        {id: 2, text: "This is the worst. DON'T BUY!"},
        {id: 3, text: "So glad I found this. Bought four already!"}
    ]
    let negative
    negative = posts.findIndex(item => item.id == 2) 
    posts.splice(negative, 1)
    console.log(posts)
}

function people() {
    const names = ["Ashley", "Donovan", "Lucas"]
    const ages = [23, 47, 18]
    const people = []

    for (let i = 0; i < names.length; i++) {
        people.push({name: names[i], age: ages[i]})
        console.log(people[i].name + ' is ' + people[i].age + ' years old')
    }
}

function kitchen() {
    const date = 3
    const kitchen = {
        owner: "Geraldine",
        hasOven: true, 
        fridge: {
            price: 500,
            works: true,
            items: [
                { name: "cheese", expiryDate: 7 },
                { name: "raddish", expiryDate: 2 },
                { name: "bread", expiryDate: 1 }
            ]
        }
    }
    let str
    for (let i = 0; i < kitchen.fridge.items.length; i++) {
        if (kitchen.fridge.items[i].expiryDate - date < 0) {
            str = kitchen.owner + "'s " + kitchen.fridge.items[i].name + ' expired ' + (date - kitchen.fridge.items[i].expiryDate) + ' days ago. '
            if (kitchen.fridge.works) {
                str = str + 'Weird, considering her fridge works. '
            } else {
                str = str +  'Probably because her fridge doesn’t work. '
            }
            if (kitchen.hasOven) {
                str =  str + 'Luckily, she has an oven to cook the ' + kitchen.fridge.items[i].name + ' in. '
            } else {
                srt =  str + 'Too bad she doesn’t have an oven to cook the ' + kitchen.fridge.items[i].name + ' in. '
            }
            if (kitchen.fridge.works) {
                str = str +  'And she’ll have to pay ' + kitchen.fridge.price/2 + ' to fix the fridge.'
            } 
        }
        if (str) console.log(str)
    }
     
}


function reservation() {
    const reservations = {
        bob: { claimed: false, name: 'Bob'},
        ted: { claimed: true, name: 'Ted' }
    }
      
    const name = prompt('Please enter the name for your reservation');

    if (reservations[name.toLowerCase()]) {
        if (reservations[name.toLowerCase()].claimed) {
            console.log('Hmm, someone already claimed this reservation')
        } else {
            console.log('Welcome, ' + reservations[name.toLowerCase()].name)
        }
    } else {
        reservations[name.toLowerCase()] = {'claimed': true, name: name}
        console.log(reservations)
    }
}

function library() {
    let library = {
        books: [
            {
                title: 'Colour of magic',
                author: 'Pratchett'
            },
            {
                title: 'Mummy trolls',
                author: 'Yanson'
            }
        ]
    }
    console.log(library)
}

function dating() {
    let person1 = {
        age: 22,
        name: 'Jack',
        city: 'London'
    }
    let person2 = {
        age: 55,
        name: 'Martha',
        city: 'London'
    }

    if (person1.age == person2.age) {
        if (person1.city == person2.city) {
            console.log(person1.name + ' wanted to date ' + person2.name)  
        } else {
            console.log(person1.name + ' wanted to date ' + person2.name + ', but couldn’t')
        }
    } else {
        console.log(person1.name + ' never wanted to date ' + person2.name )
    }
}

function array() {
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    numbers.splice(1, 2)
    numbers.splice(numbers.length - 4, 4)
    numbers.splice(0, 0, 0)
    console.log(numbers)
}

function tesla() {
    let boughtTesla = true
    const yearOfTeslaPurchase = 2016
    let isUSCitizen = true
    let currentYear = 2018

    if (boughtTesla && isUSCitizen) {
        if (currentYear - yearOfTeslaPurchase >= 4) {
            console.log('Would you like an upgrade?')
        } else {
            console.log('Are you satisfied with the car?')
        }
    } 
    else if (boughtTesla && !isUSCitizen) {
        console.log('Would you like to move to the US?')
    }
    else if (!boughtTesla) {
        console.log('Would you like to buy Tesla?')
    }
}
