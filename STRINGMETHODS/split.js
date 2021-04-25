// Splits a string into an array of substrings
let str = "How are you doing today?";
let res = str.split("o");
console.log(res) 
//output [ 'H', 'w are y', 'u d', 'ing t', 'day?' ]

let str1 = "How are you doing today?";
let res1 = str1.split("");
console.log(res1)
//output //[
//   'H', 'o', 'w', ' ', 'a',
//   'r', 'e', ' ', 'y', 'o',
//   'u', ' ', 'd', 'o', 'i',
//   'n', 'g', ' ', 't', 'o',
//   'd', 'a', 'y', '?'
// ]