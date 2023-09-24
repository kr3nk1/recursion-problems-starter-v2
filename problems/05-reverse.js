/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
function reverse(string) {
  // Base case: If the string is empty or has a length of 1, return the string itself
  if (string.length <= 1) {
    return string;
  }

  // Recursive case: Reverse the substring except the first character
  return string[(string.length - 1)] + reverse(string.substring(0, string.length - 1));
 /*  return reverse(string.substring(1)) + string[0]; */
}


/* let reverse = (string) => {
if(string.length <= 1) {
  return string;
} else {
  return string.slice(-1) + reverse(string.slice(0, -1));

} 
sš

};

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""
 */
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
