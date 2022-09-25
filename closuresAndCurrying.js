// Problem #1
// Use a closure to create multiple functions for adding a prefix to a name. The prefix could be Doctor, Duchess, Sir, and so on.

// It should be possible to create a new prefix function like this:

// const prefixSir = addPrefix("Sir");

function addPrefix(str){
  const prefix = str;
  return function(name){
    return prefix + " " + name;
  }
}

const sirPrefix = addPrefix("sir");
console.log(sirPrefix("Patty"));

// Problem #2
// Use a closure to create multiple functions for making various animal noises. For example, it should be possible to do the following:

// const lionSound = soundMaker("roar");
// const mouseSound = soundMaker("squeak");

function soundMaker(soundStr){
  const sound = soundStr;
  return function(animal){
    return `The ${animal} says ${soundStr}!`;
  }
}

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");

console.log(lionSound("Lion"));
console.log(mouseSound("rat"));
console.log(soundMaker("hooo")("owl"));

// Problem #3 (Harder)
// Use closures to create multiple functions for adding both a prefix and a suffix to a name. For example, it should be possible to do the following:

// const misterJunior = nameEnhancer("Mister")("Junior");
// const duchessThird = nameEnhancer("Duchess")("The Third");

function nameEnhancer(prefixStr){
  const prefix = prefixStr;
  return function(suffixStr){
    const suffix = suffixStr;
    return function(name){
      return `${prefix} ${name} ${suffix}`;
    }
  }
}

const misterJunior = nameEnhancer("Mister")("Junior");
const duchessThird = nameEnhancer("Duchess")("The Third");

console.log(misterJunior("Patty Rose"));
console.log(duchessThird("Patty Rose"));

// Problem #4 (Harder)
// Use closures to create multiple functions to first add to and then multiply a value. It should be possible to do the following:

// const addTwoMultiplyByThree = addaMult(2)(3);
// const addFiveMultiplyByNine = addaMult(5)(9);

function addMult(num){
  const addNumber = num;
  return function(multiply){
    const multiplyNumber = multiply;
    return function(numberToModify){
      return ((numberToModify + addNumber) * multiplyNumber);
    }
  }
}

const addTwoMultiplyByThree = addMult(2)(3);
const addFiveMultiplyByNine = addMult(5)(9);

console.log(addTwoMultiplyByThree(2));
console.log(addFiveMultiplyByNine(100));