/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

/* const subsets = (arr) => {
  if(arr.length === 0) {
    return [[]];
  }
let allSubs = [];
let rest = subsets(arr.slice(1));

rest.forEach(el => {
  const elCopy = [...el];
  elCopy.unshift(arr[0]);
  allSubs.push(el);
  allSubs.push(elCopy);  
});

return allSubs;


};

console.log(subsets([])); // [[]]
console.log(subsets([1])); // [[], [1]]
console.log(subsets([1, 2])); // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] */
let arr =[3];
let allSubs = [];
let rest = [[], [ 2 ], [ 1 ], [ 2, 1 ] ]

rest.forEach(el => {
  const elCopy = [...el];
  elCopy.unshift(arr[0]);
  allSubs.push(el);
  allSubs.push(elCopy);  
});


console.log(allSubs);


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
