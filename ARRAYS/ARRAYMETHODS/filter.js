//The filter() method creates an array filled with all array elements that pass a test (provided as a function).
let scores = [52, 93, 86, 70];

function pass(scores) {
  return scores >= 75;
}
let example = scores.filter(pass)

console.log(example) // [ 93, 86 ]
