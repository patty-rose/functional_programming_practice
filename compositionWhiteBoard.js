///Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color. This should be the end result:

// painter1.paints()
//"Paints green!"
//> painter2.paints()
//"Paints yellow!"
//> painter3.paints()
//"Paints red!"

const canPaint = (person) => ({
  paints: () => {
    return `Paints ${person.color}!`
  }
});

const painterPerson = (color) => {
  let painter = {
    color
  }
  return {...painter, ...canPaint(painter)};
};

const painter1 = painterPerson("green");
const painter2 = painterPerson("blue");
const painter3 = painterPerson("yellow");

console.log(painter1.paints());
console.log(painter2.paints());
console.log(painter3.paints());

//Compose a function called sound(). You should be able to add the following functionality to the objects listed:

//> faucet.sound()
// "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn"

const makeSound = (personOrThing) => ({  
  sound: ()=> {
    return `${personOrThing.noise}`
  }
}); //this function will become like a method to a class.. It will be stored within another function to amend it onto an object-- the object can then contain multiple functionalities including this one. WHAT AN OBJECT CAN DO

const personOrThing = (noise) => {
  let pOT = {
    noise
  }
  return {...pOT, ...makeSound(pOT)};
}; //this function (maybe a function factory?) takes an object and then appends other functions as functionality onto the objects key value pairs.. WHAT AN OBJECT IS

const faucet = personOrThing("Drip drip drip.");
const oldCar = personOrThing("Grumble grumble");
const sleepyBear = personOrThing("Grrr...yawn");

console.log(faucet.sound());
console.log(oldCar.sound());
console.log(sleepyBear.sound());

// Compose a function called throw(). The throw() function should determine the distance and speed a battle robot can throw a spear. This function should be unary, so you will need to use currying.

// Next, add the throw() function to multiple battle robots. A result might look something like this:

// > battleRobot1.throw();
// "The battle robot throws the spear 100 yards at 200 miles per hour!"


const canThrow = (robot) => ({
  throw : function(height){
    return function(strength){
      return `${robot.name} throws the spear ${height * 20} yards at ${strength * 10} miles per hour!`
    }
  }
});

const robot = (name) => {
  let battleRobot = {
    name
  }
  return {...battleRobot, ...canThrow(battleRobot)};
};

const superBee = robot("Super Bee");
console.log(superBee.throw(10)(20));