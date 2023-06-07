const str = "the fat cat hit the rat with a bat"
const str1 ="bob yelled hello"
const str2 = "it's fleece was white as snow";
const str3 = "0542212222";
const str4 = "054hihihii";
const str5 = "9542212222";

//Checks if it contains “a” in the string
const checkIfContainsA = function (str){
    return str.search(/a/i) >= 0 ? true : false
}

//Checks if it’s a string that ends with “at”
const checkIfEndsWithAt = function(str){
    //return str.search(/at$/i) >=0 ? true : false
    return RegExp('at$', 'i').test(str)
}
//Checks if it’s a number that starts with 054 and of size 10.
const checkIfStartsWithNum = function(str){
    return RegExp('^054[0-9]{7}').test(str)
  /**
   * should return true if string is all numbers / size 10 / starts with 054
   * HINT : look into ^ , into Ranges [] and sizes {}
   */

}

console.log('Find a or A')
console.log(checkIfContainsA(str)) //returns true
console.log(checkIfContainsA(str1)) //returns false

console.log('String ends with at')
console.log(checkIfEndsWithAt(str)) //returns true
console.log(checkIfEndsWithAt(str1)) //returns false
console.log(checkIfEndsWithAt(str2)) //returns false

console.log('String starts with 054, all symbols are digits and have length of 10 symbols')
console.log(checkIfStartsWithNum(str)) //returns false
console.log(checkIfStartsWithNum(str3)) //return true
console.log(checkIfStartsWithNum(str4)) //return false
console.log(checkIfStartsWithNum(str5)) //return false



    const regexArr = [/a/, /b/, /^d/, /e$/]
    const str11 = "Bike"
    const str12 = "the room is on fire"
    const str13 = "Fergalicious"
    const str14 = "Fox in sheep clothing"

    function searchMatchingRegex(str) {
        for (let reg in regexArr) {
            if (RegExp(regexArr[reg]).test(str)) return true
        }
        return false
    }

    console.log('Array of RegExps')
    console.log(searchMatchingRegex(str11)) //return true (contains b)
    console.log(searchMatchingRegex(str12)) //return true (ends with e)
    console.log(searchMatchingRegex(str13)) //return true (contains a)
    console.log(searchMatchingRegex(str14)) //return false


    console.log(searchMatchingRegex('cat')) //will return true
    console.log(searchMatchingRegex('bike')) //will return true
    console.log(searchMatchingRegex('mouse')) //will return true
    
    
const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"

const emailValidator = function(str){
    console.log()
    return RegExp('\\w+\\@\\w+\\.com$').test(str)
  /**
   * returns true if email prefix and domain is made strictly out of letters , the email must end in .com
   * HINT : doesnt have to be a big regex expression use the methods from RegExp
   */
}

console.log('E-mail validator')
console.log(emailValidator(email1)) //return true
console.log(emailValidator(email2)) //return true
console.log(emailValidator(email3)) //return false


const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"

const urlValidator = function(str){
    return RegExp('^www\\.\\w+\\.com$').test(str)
  /**
   * returns true if URL starts with www. , the URL must end in .com
   * HINT : doesnt have to be a big regex expression use the methods from RegExp
   */
}

console.log('Url validator')
console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return true
console.log(urlValidator(thirdURL)) //return false

