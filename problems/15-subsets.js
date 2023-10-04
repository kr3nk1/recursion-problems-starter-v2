/***********************************************************************
Write a function called `subsets` that will return all subsets of an numsay.

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

/* const subsets = (nums) => {
  if(nums.length === 0) {
    return [[]];
  }
let allSubs = [];
let rest = subsets(nums.slice(1));

rest.forEach(el => {
  const elCopy = [...el];
  elCopy.unshift(nums[0]);
  allSubs.push(el);
  allSubs.push(elCopy);  
});

return allSubs;


};

console.log(subsets([])); // [[]]
console.log(subsets([1])); // [[], [1]]
console.log(subsets([1, 2])); // [[], [1], [2], [1, 2]]
console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] */

  const subsets = (nums) => {
    let results = [[]];

    function maker(index, current) {
      for (let i = index; i < nums.length; i++){
        current.push(nums[i]);
        results.push([...current]);
        maker(i + 1, current);
        //backtrack
        current.pop()
      }
    }
    maker(0,[] );
    return results;
  
  };

/*   var subsets = function(nums) {
    // global result
    const results = [];
    // dfs recursive helper
    const dfs = (i, nums, current) => {
    // base case
    if(i === nums. length) {
    results.push(current.slice());
    return;
    }
    // dfs recursive case
    // exclude
    dfs(i + 1, nums, current);
    // include
    current.push(nums[i]);
    dfs(i + 1, nums, current);
    current.pop();
    }
    dfs(0, nums, []);
    return results;
  }
 */
/*   console.log(subsets([])); // [[]]
  console.log(subsets([1])); // [[], [1]]
  console.log(subsets([1, 2])); // [[], [1], [2], [1, 2]] */
  // console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] */



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
