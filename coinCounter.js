//coin counter application that takes X amount of money and determines the exact amount of change needed in quarters, dimes, nickels and pennies.

//recursive coinCounter:
function recursiveCoinCounter(money){
  if(isNaN(money)){
    return "invalid input";
  } if(money >= .25) {
    quarters = Math.floor(money / .25);
    console.log(money/.25);
    return (`Quarters: ${quarters}, ` + coinCounter(money - (quarters * .25)));
  } if (money >= .10) {
    dimes = Math.floor(money / .10);
    console.log(money/.10);
    return (`Dimes: ${dimes}, ` + coinCounter(money - (dimes * .10)));
  } if (money >= .05) {
    nickels = Math.floor(money / .05);
    console.log(money/.05);
    return (`Nickels: ${nickels}, ` + coinCounter(money - (nickels * .05)));
  } else if ( money > 0){
    pennies = Math.round(money/.01);
    console.log(money/.01);
    return (`and Pennies: ${pennies}!`);
  }
}

//coint counter with closure -- has an off by 1 bug with the pennies.:

function coinCounterClosure(coinValue){
  const coin = coinValue;
  return function(money){
    return Math.floor(money / coin)
  }
}
const quarterCounter = coinCounterClosure(.25);
const dimeCounter = coinCounterClosure(.10);
const nickelCounter = coinCounterClosure(.05);
const pennyCounter = coinCounterClosure(.01);

function coinCounterRecursiveUsingClosure(money){
  if (money >= .25) {
    quarterCount = quarterCounter(money);
    return (`Quarters: ${quarterCount}, ` + coinCounterRecursiveUsingClosure(money - quarterCount));
  } if (money >= .10) {
    return (`Dimes: ${dimeCounter(money)}, ` + coinCounterRecursiveUsingClosure(money - dimeCounter(money)));
  } if (money >= .05) {
    return (`Nickels: ${nickelCounter(money)}, ` + coinCounterRecursiveUsingClosure(money - nickelCounter(money)));
  } else if (money >0) {
    return (`Pennies: ${pennyCounter(money)}!`);
  }
}