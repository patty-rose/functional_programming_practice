//storing state inside a function!

//same function but broken down with notes:
const storeState1 = () => {//First, our outer function is stored in the constant storeState. It does not take an argument. The only job of the outer function is to store the currentState of an object.
  let currentState = {};//The currentState of an object will be initialized as a {}. Note that we use let because the currentState will be mutated each time the inner function is called.
  return (stateChangeFunction) => {//Our outer function returns an anonymous inner function that takes one parameter called stateChangeFunction. This inner function will take a function as an argument. We can do this because functions are first-class citizens in JavaScript. The function that we pass in will specify the exact change that should be made to currentState. Note that we've already written the function that will be passed in as an argument — we will demonstrate how it works soon.
    const newState = stateChangeFunction(currentState);//will take the function we pass in as an argument and then call it on currentState. Instead of mutating currentState, we will save the new state in a constant called newState.
    currentState = {...newState};//Now it's time to break the rules. We are going to need to update the currentState. We will make a copy of newState and assign it to currentState. (This is similar to what React does with its setState() method. We'll learn about setState() in the next course section.)
    return newState;//Finally, our inner function will return the newState. Why are we returning newState instead of currentState? Well, in this particular use case, it doesn't matter which we do because both newState and currentState are equal. In a basic React application, we'd update the state and then return that state. In that case, it makes more sense to return currentState. But here's another interesting use case which we'll learn about in a few weeks when we use Firestore, a cloud database solution. With Firestore, we might think of currentState as being the state of our database. However, because it takes time to update and return currentState (an async operation), we can provide a quick snapshot of state to users by just returning the equivalent of newState.
  }
}

//the function not broken down:
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

//Next, we will need to store our function in another constant like this:

const stateControl = storeState();//Here, we are actually invoking the storeState() function and creating a closure over the currentState variable in the outer function.

//value of stateControl:
// stateControl = (stateChangeFunction) => {
//   const newState = stateChangeFunction(currentState);
//   currentState = {...newState};
//   return newState;
// }

// As we can see, stateControl holds the inner function. It also retains the currentState variable from the outer function. When storeState() is called and stored in the stateControl variable, currentState is set to {}.

//plant functions:
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

const fedPlant = stateControl(blueFood);
console.log(fedPlant);
//1.We passed in the variable blueFood into stateControl. This invokes the inner function inside storeState(). (Be careful here — we don't want to pass in blueFood() because we don't want the function to be invoked yet!)
//2.blueFood is passed in as an argument for the stateChangeFunction parameter. Now const newState = blueFood(currentState);.
//3.When blueFood(currentState) is called, it invokes the following function:  
// (state) => ({
//   ...state,
//   ["soil"] : (state["soil"] || 0) + 5
// })
//4.currentState is passed into the state parameter. Because currentState doesn't have a soil property yet, it defaults to 0 before 5 is added. This is because we are using the || operator to ensure the default value of the soil property is 0 if it hasn't been defined.

const plantFedAgain = stateControl(greenFood);
console.log(plantFedAgain);