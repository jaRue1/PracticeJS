 // The every() method checks if all elements in an array pass a test (provided as a function).

 let scores = [52, 93, 86, 70];
 let scores2 = [87, 93, 86, 97];

function pass(scores) {
  return scores >= 75;
}

let example = scores.every(pass)
let example2 = scores2.every(pass)

// Output
console.log(example) // false b/c not every score in that array had a passing grade
console.log(example2) // true b/c every score in that array had a passing grade

