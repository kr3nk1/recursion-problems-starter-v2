/***********************************************************************
Write a recursive function called `exponent` that takes two integers, 
`b` and `n`, and returns `b` raised to the `n`th n. Your
function should work when `b` or `n` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

function exponent(b, n) {
if(n === 0) {
  return 1;
}
if(n > 0) {
  return b * exponent(b, n - 1);
  } 
if(n < 0) {
    return (1 / b) * (exponent(b, n + 1));
  } 
  

   /* // Base case: If the n is 0, return 1.
    if (n === 0) {
      return 1;
    }
  
    // Recursive case for positive n
    if (n > 0) {
      return b * exponent(b, n - 1);
    }
  
    // Recursive case for negative n
    if (n < 0) {
      return 1 / (b * exponent(b, -n - 1));
    } */
    

};

/* console.log(exponent(3, 2)); // 9
console.log(exponent(2, -2)); // 1/4 (or 0.25)
console.log(exponent(5, 5)); // 3125 */
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = exponent;
} catch (e) {
  module.exports = null;
}
