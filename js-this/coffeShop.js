function drinkCoffee() {
    const coffeeShop = {
        beans: 40,
        beansPrice: 1,
        drinkRequirements: {
            latte: { beans: 10, price: 5 },
            americano: { beans: 5, price: 3 },
            doubleShot: { beans: 15, price: 8 },
            frenchPress: { beans: 12, price: 6 }
        },
        money: 0,
        makeDrink: function (drinkType) {
            if (!(drinkType in this.drinkRequirements)) {
                console.log(`Sorry, we don't make ${drinkType}`)
                return 'type'
            } else if (this.beans < this.drinkRequirements[drinkType].beans) {
                console.log("Sorry, we're all out of beans")
                return 'beans'
            } else {
                console.log(`Here is your ${drinkType}, ${this.drinkRequirements[drinkType].beans} beans wasted`)
                this.beans -= this.drinkRequirements[drinkType].beans 
                return 'drink'
            }
        },
        buyBeans: function(numBeans) {
            if (this.beansPrice *  numBeans <= this.money) {
                this.money -= numBeans*this.beansPrice
                this.beans += numBeans
                return true
            } else {
                console.log('We are out of money')
                return false
            }
        },
        buyDrink: function(drinkType) {
            console.log(this.beans)
            console.log(this.money)
            let res = this.makeDrink(drinkType)
            if (res == 'drink') {
                this.money += this.drinkRequirements[drinkType].price
            } else if (res == 'beans') {
                console.log("Wait we'll buy more beans!")
                let beans = this.buyBeans(this.drinkRequirements[drinkType].beans - this.beans)
                if (beans) {
                    this.makeDrink(drinkType) 
                }
            }

        }
    }
      
    coffeeShop.buyDrink("latte"); 
    coffeeShop.buyDrink("americano");
    coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
    coffeeShop.buyDrink("doubleShot");
    coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
}

drinkCoffee()