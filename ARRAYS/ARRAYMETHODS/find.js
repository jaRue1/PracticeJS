//The find() method returns the value of the first element in an array that pass a test (provided as a function).
let scores = [52, 93, 86, 70];

function pass(scores) {
  return scores >= 75;
}
let example = scores.find(pass)

console.log(example) // 93
