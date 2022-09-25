//find all prime numbers up to a given number. using closure, recursion, and the Sieve of Eratosthenes.

function primeClosure(primeNumber){
  const prime = primeNumber;
  return function(numArr){
    return numArr.filter(x => x === prime || x % prime != 0);
  }
};

const twos = primeClosure(2);
const threes = primeClosure(3);
const fives = primeClosure(5);
const sevens = primeClosure(7);

function primeRecursion(numberArray){
  if(Array.isArray(numberArray) === false){
    return "invalid input, must be an array of numbers";
  }
  if(numberArray[0] === 2){
    return(`${numberArray[0]},` + primeRecursion(twos(numberArray.slice(1))));
  }
  if(numberArray[0] === 3){
    return(`${numberArray[0]},` + primeRecursion(threes(numberArray.slice(1))));
  }
  if(numberArray[0] === 5){
    return(`${numberArray[0]},` + primeRecursion(fives(numberArray.slice(1))));
  }
  else {
    return(sevens(numberArray));
  }
}

function primeSieve(num){
  const numberArr = [];
  for(let i = 2; i <= num; i++){
    numberArr.push(i);
  }
  return primeRecursion(numberArr);
}

console.log(primeSieve(99));