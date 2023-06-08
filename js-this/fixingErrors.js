function hunger() {
  const person = {
      hungry: true,
  
      feed: function () {
        if (this.hungry) {
          this.hungry = false;
          alert('Im no longer hungry!')
        }
      }
    }  
  
  person.feed() //should alert "I'm no longer hungry"
}

//hunger()



function carPump() {
  const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  
}

//carPump()
  

function flyPlane() {
  const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  const airplane = {
    fuel: 0,
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());

  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());
}

//flyPlane()


function secret() {
  const revealSecret = function () {
    return this.secret;
  };

  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
  };

  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };

  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };

  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);
}

// secret()