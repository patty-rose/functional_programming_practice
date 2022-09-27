// Write a recursive function that reverses the order of words in a sentence. For instance, "I am a cat" should become "cat a am I".

function recursiveSentenceReverse(arr){
  if(Array.isArray(arr) === false){
    return "invalid input";
  }
  if (arr.length === 1){
    return arr[0];
  } else {
    return recursiveSentenceReverse(arr.slice(1)) + ` ${arr[0]}`;
  }
}

function reverseSentence(str){
  const sentenceArr = str.split(" ");
  return recursiveSentenceReverse(sentenceArr);
}

const sentence = "I am a cat";
console.log(reverseSentence(sentence));

// Write a recursive function that concatenates "red green refactor" to a string X number of times, where X is the argument passed into the function. rgr(3) should return the following:

// "red green refactor red green refactor red green refactor"

function rgr(num){
  if (num > 1){
    return "red green refactor " + rgr(num-1);
  } else if (num === 1){
    return "red green refactor";
  }
}

console.log(rgr(3));