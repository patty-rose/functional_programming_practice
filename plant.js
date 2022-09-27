//create a small functional programming app to grow a plant

//Object Oriented example:
class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }

  hydrate() {
    this.water ++
  }

  feed() {
    this.soil ++
  }

  giveLight() {
    this.light ++
  }
}

// let plant = new Plant();
// plant.hydrate();
// plant;
// Plant {water: 1, soil: 0, light: 0}

//hydrate method as a pure function:
const hydrate = (plant) => {//create a function literal taking plant as arg
  return { //returns a new object that represents the plant new state
    ...plant,//spread operator to return new state of the plant
    water: (plant.water || 0) + 1
  }
};

//feed method as a pure function
const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
};

//This function pretty much looks the same as the previous one. Also, it doesn't seem very reusable. It can only take an object that has a soil property and then increment that soil property by 1. Because the methods look so similar, we clearly have a chance to refactor here.

// Remember that functional programming is an attempt to make our code more abstract and reusable. This is in contrast to object-oriented programming, which is often about making our code more concrete and encapsulated.

//all three methods reduced into 1 pure function"
const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
}

let plant = { soil: 0, light: 0, water: 0 };
changePlantState(plant, "soil");

//refactoring the function even further to be more pure--
//make our variables more abstract:
const changeState = (state, prop) => {
  return {
    ...state,
    [prop]: (state[prop] || 0) + 1
  }
}

//but now let's accept a value so we can increment or decrement by any amount:
const changeStateMore = (state, prop, value) => ({
  ...state,
  [prop] : (state[prop] || 0) + value
})

//same function but curried so it only takes 1 argument:
const changeStateBetter = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const feed1 = changeStateBetter("soil");
const hydrate1 = changeStateBetter("water");
const giveLight = changeStateBetter("light");

//feed(5)(plant); -- we just used our function to easily create more specific functions

const blueFood = changeStateBetter("soil")(5)
const greenFood = changeStateBetter("soil")(10)
const yuckyFood = changeStateBetter("soil")(-5)

//blueFood(plant)

// Our function is pure, does not mutate state, and has no side effects;
// Our function is unary and takes only one argument;
// Our function uses currying, which allows us to reuse it as a function factory;
// Our function takes advantage of closures (because we wouldn't be able to curry without it);
// Our function is sufficiently abstracted that it could be used with other types of objects that could be incremented or decremented as well.
