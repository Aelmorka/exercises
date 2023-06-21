function pushPulling () {
    
    const push = function () {
        console.log("pushing it!")
    }
      
    const pull = function () {
        console.log("pulling it!")
    }

    function pushPull (func) {
        func()
    }
      
    pushPull(push) //should print "pushing it!"
    pushPull(pull) //should print "pulling it!"
}

function timeWaitsForNbody () {
    const returnTime = function (time) {
        alert('The current time is: ' + time)
    }

    function getTime(func) {
        const time = new Date()
        func(time)
    }
      
    getTime(returnTime)
}

function Party() {
    function logData(data) {
        console.log(data)
    }
    const displayData = function (alertDataFunc, logDataFunc, data) {
        alertDataFunc(data);
        logDataFunc(data);
    };

      
    displayData(alert, logData, "I like to party")
}

function treeParamArrow () {
    const add = (a, b, c) => a + b + c
    console.log(add(2, 3, 4))
}

function temperature() {
    const determineWeather = temp => {
        if(temp > 25){
          return "hot"
        }
        return "cold"
    }
    const commentOnWeather = temp => console.log(`${temp}. It's ${determineWeather(temp)}`)

    commentOnWeather(30) //returns "It's hot"
    commentOnWeather(22) //returns "It's cold"
}

function explosion() {
    const explode = (lightFunc, soundFunc, sound) => {
        lightFunc()
        soundFunc(sound)
      }
          
      const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
          
      const makeSound = sound => alert(sound)
          
      explode(shineLight, makeSound, "BOOM")  
}

function lessonPractice () {
    let x = 0
    function add(y) {
        let z = x + y
        x = y
        return z
    }

    console.log(add(3));  //3
    console.log(add(1));  //4
    console.log(add(2));  //3
    console.log(add(2));  //4
    console.log(add(8));  //10
}


pushPulling ()
timeWaitsForNbody ()
Party()
treeParamArrow ()
temperature()
addEventListener("DOMContentLoaded", () => {
    explosion()
});
lessonPractice ()
