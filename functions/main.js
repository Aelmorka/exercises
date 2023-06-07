"use strict"

function isEven (num) {
    if (num % 2 == 1) return false
    return true
}

function printOdd (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!isEven(arr[i])) console.log(arr[i])
    }
}

function checkExistance (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) return true
    }
    return false
}

const calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    }
}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")

    function increaseByNameLength(money, name) {
        return money*name.length
    }
    function makeRegal(name) {
        return 'His Royal Highness, ' + name
    }
}

function main () {
    let num = 13
    let arr = [1, 4, 5, 6, 6, 7, 7, 9, 13, 4, 7, 8]
    const result1 = calculator.add(20, 1)
    const result2 = calculator.subtract(30, 9)
    console.log('Number evennes')
    console.log("Number " + num + "'s evennes is " + isEven(num))
    console.log('----------')
    console.log('Print odd')
    console.log('Array: [' + arr + ']')
    printOdd(arr)
    console.log('----------')
    console.log('Check existance')
    console.log("Number's " + num + " existance in array [" + arr + "] is " + checkExistance(arr, num))
    console.log('----------')
    console.log('Calculator')
    console.log(calculator.add(result1, result2))
    console.log('----------')
    turnToKing("martin luther", 100)
}

main ()