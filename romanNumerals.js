//convert numbers into Roman numerals. This time, solve the problem recursively!

// Symbol  Value
// I       1
// V       5
// X       10
// L       50
// C       100
// D       500
// M       1,000

//using recursive function
function convertToRomanNumerals(num){
  if(isNaN(num) || num > 3999){
    return "invalid input, must be a number between 0 and 3,999"
  } if(num >= 1000){
    const thousands = Math.floor(num/1000);
    return ('M'.repeat(thousands) + convertToRomanNumerals(num - (thousands * 1000)));
  } if (num >= 500){
    const fiveHundies = Math.floor(num/500);
    return('D'.repeat(fiveHundies) + convertToRomanNumerals(num - (fiveHundies * 500)))
  } if (num >= 100){
    const hundreds = Math.floor(num/100);
    if (hundreds <= 3) {
      return ('C'.repeat(hundreds) + convertToRomanNumerals(num - (hundreds * 100)));
    } else if (hundreds > 3){
      const underFive = 5 - hundreds;
      return ('C'.repeat(underFive) + 'D' + convertToRomanNumerals(num - (hundreds * 100)));
    }
  } if (num >= 50){
    const fifties = Math.floor(num/50);
    if (fifties <= 3) {
      return ('L'.repeat(fifties) + convertToRomanNumerals(num - (fifties * 50)));
    } else if (fifties > 3){
      const underFive = 5 - fifties;
      return ('L'.repeat(underFive) + 'C' + convertToRomanNumerals(num - (fifties * 50)));
    }
  } if (num >= 10){
    const tens = Math.floor(num/10);
    if (tens <= 3) {
      return ('X'.repeat(tens) + convertToRomanNumerals(num - (tens * 10)));
    } else if (tens > 3){
      const underFive = 5 - tens;
      return ('X'.repeat(underFive) + 'L' + convertToRomanNumerals(num - (tens * 10)));
    }
  } if (num >= 5){
    const fives = Math.floor(num/5);
    if (fives <= 3) {
      return ('V'.repeat(fives) + convertToRomanNumerals(num - (fives * 5)));
    } else if (fives > 3){
      const underFive = 5 - fives;
      return ('V'.repeat(underFive) + 'X' + convertToRomanNumerals(num - (fives * 5)));
    }
  } if (num >= 1){
    const ones = Math.round(num/1);
    if (ones <= 3) {
      return ('I'.repeat(ones));
    } else if (ones > 3){
      const underFive = 5 - ones;
      return ('I'.repeat(underFive) + 'V');
    }
  }
}