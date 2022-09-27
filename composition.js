//composition doesn't care about objects, it cares about what objects can DO. Here's a canEat function utilizing closure. Anything assigned to this function canEat.
const canEat = (creature) => ({
  eat: (food) => {
    return `The ${creature.name} eats the ${food}.`
  }
});

//here's another function for canSleep.. Anything can be assigned to this as well
const canSleep = (creature) => ({
  sleep: () => {
    return `The ${creature.name} sleeps.`
  }
});

//We can use a FUNCTION FACTORY to add multiple pieces of functionality to an object. For instance, if we wanted to create a creature that can both eat and sleep, we'd do something like this:
const sleepingEatingCreature = (name) => {
  let creature = {
    name
  }

  return { ...creature, ...canEat(creature), ...canSleep(creature) };
};

const platypus = sleepingEatingCreature("platypus");

console.log(platypus);
console.log(platypus.eat("eggs"));
console.log(platypus.sleep());