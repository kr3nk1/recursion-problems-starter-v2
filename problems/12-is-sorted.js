/***********************************************************************
Write a recursive solution called `console.log(isSorted` to determine if) the input array
is sorted in ascending order.

Examples:

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false
***********************************************************************/

function isSorted(arr) {
  // Base case:
  if (arr.length <= 1) {
    return true;
  }
  if(arr[0] > arr[1]) {
    return false;
  } else {
    true
  }
return isSorted(arr.slice(1));
}


/* console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([1, 4, 10, 11, 12,40,41])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false */
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
