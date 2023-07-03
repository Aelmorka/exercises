function cook() {
    let recipe = {
        "name": "Mashed Potatoes",
        "serves": 4,
        "ingredients": [
            {
                "name": "water"
            },
            {
                "name": "potatoes",
                "count": 2
            },
            {
                "name": "butter",
                "count": 2,
                "unit": "tablespoons"
            },
            {
                "name": "salt",
                "count": 0.5,
                "unit": "teaspoon"
            },
            {
                "name": "pepper",
                "count": 0.25,
                "unit": "teaspoons"
            },
            {
                "name": "garlic powder",
                "count": 2,
                "unit": "teaspoons"
            }
        ],
        "directions": [
            "Cut potatoes into half inch thick slices",
            "Add potatoes to a pot and cover with an inch of water.",
            "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
            "Simmer for 20 minutes or until potatoes are fork tender.",
            "Drain water from potatoes, leaving the potatoes in the original pot.",
            "Add remaining ingredients to the pot with the potatoes.",
            "Mash potatoes until they reach the desired consistency.",
            "Serve immediately, or cover and refrigerate."
        ],
        "calories": 250,
        "healthy": true
    }
    
    console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
    console.log(recipe.healthy) //should print true
    console.log(recipe.calories) //should print 250
    console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"
}

cook()

function animals() {
    let animals = [
        {
            "name": "Cow",
            "weight": "500 - 650",
            "units": "kg",
            "habitat": [
                "Australia", 
                "United States of America",
                "Colombia", 
                "Argentina", 
                "Spain", 
                "France",
                "many islands"
            ],
            "endangered": false,
            "food": [
                {"name": "clover", "pers": 70}, 
                {"name": "grass", "pers": 30}
            ],
            "taste": 5
        },
        {
            "name": "Elephant",
            "weight": "1.9 - 6.9",
            "units": "t",
            "habitat": [
                "sub-Saharan Africa", 
                "South Asia", 
                "Southeast Asia"
            ],
            "endangered": false,
            "food": [
                {"name": "leaves", "pers": 10}, 
                {"name": "twigs", "pers": 10},
                {"name": "fruit", "pers": 10},
                {"name": "bark", "pers": 10}, 
                {"name": "grass", "pers": 10}, 
                {"name": "roots", "pers": 10}
            ],
            "taste": 1
        },
        {
            "name": "Grey Wolf",
            "weight": "12 - 79.4",
            "units": "kg",
            "habitat": [ "Eurasia", "North America" ],
            "endangered": false,
            "food": [
                {"name": "moose", "pers": 10},
                {"name": "red deer", "pers": 10},
                {"name": "roe deer", "pers": 10},
                {"name": "wild boar", "pers": 10} 
            ],
            "taste": 1
        },
        {
            "name": "Squirrel",
            "weight": "12 - 8000",
            "units": "g",
            "habitat": [ "Everywhere"],
            "endangered": false,
            "food": [ 
                {"name": "seeds", "pers": 10} ,
                {"name": "nuts", "pers": 10} ,
                {"name": "insects", "pers": 10} ,
                {"name": "small vertebrates", "pers": 10} 
            ],
            "taste": 3
        }
    ]
}
