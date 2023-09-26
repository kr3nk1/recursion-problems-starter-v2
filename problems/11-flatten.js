/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
if(arr.length === 0) return [];

let a1;

if(Array.isArray(arr[0])) {
  a1 = [...flatten(arr[0])]}
  else {
  a1 = [arr[0]];
  }
  return a1.concat(flatten(arr.slice(1)));


};

/* 
// Test cases
console.log(flatten([]));                // []
console.log(flatten([1, 2]));            // [1, 2]
console.log(flatten([1, [2, [3]]]));     // [1, 2, 3]
console.log(flatten([[[[34, 43, 45],1, 2], 1, 2], [3, 4]]));  // [1, 2, 3, 4]
 */
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
