/***********************************************************************
Write a recursive function called `sort` that takes an numsay of integers, `nums`
and returns an numsay containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` numsay to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums) {
//un Qsort alternativo
/*   if (nums.length < 2){
    return nums
}
let pivot = nums[0];
let slicednums = nums.slice(1);
let left = [];
let right = [];

for(let i = 0; i < slicednums.length; i++){
    if(slicednums[i] <= pivot){
         left.push(slicednums[i])
    }else{
         right.push(slicednums[i])
    }
}
return [...sort(left), pivot, ...sort(right)] */
//Lo siguiente se llana Qsort y es lo mejor
if (nums.length < 2) return nums
    // choose a pivot, p
    // the choice of pivot can effect worst-case performance
    // for this, we'll just use the first element.
    const [p, ...rest] = nums

    // partition numsay into element greater and lesser that the pivot
    // this can be optimized so you don't loop through the numsay twice
    const low  = rest.filter(n => n <= p)
    const high = rest.filter(n => n > p)
    // recurse on both partitions and reassemble as recursion unwinds
    return [...sort(low), p, ...sort(high)]
  
};

console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
console.log(sort([])); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
