import validator from "validator"
import { faker } from '@faker-js/faker';


function validation() {
    //Ex. 1
    //Check whether "shoobert@dylan" is a valid email (should be false)
    console.log(`shoobert@dylan is email ${validator.isEmail('shoobert@dylan')}`)

    //Ex. 2
    //Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
    console.log(`786-329-9958 is US phone number ${validator.isMobilePhone('786-329-9958', "en-US")}`)

    //Ex. 3
    //Use the following blacklist
    let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
    //Along with validator's `blacklist` method to clean this text:
    let text = "I'M SO EXCITED!!!~!"
    //Ultimately, it should print "im so excited"
    console.log(validator.blacklist(text, blacklist))
}

validation()

function makeHuman(num) {
    for (let i = 0 ; i < num; i++) {
        console.log(
            faker.helpers.fake(
              '{{person.firstName}}, {{internet.avatar}}'
            )
          );
    }
}

makeHuman(2)