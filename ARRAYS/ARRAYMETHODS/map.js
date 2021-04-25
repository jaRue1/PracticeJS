//The map() method creates a new array with the results of calling a function for every array element.
let numbers = [200, 404, 500, 304];
let example = numbers.map(onTen)

function onTen(num) {
  return num * 10;
}

console.log(example)
//output
// [ 2000, 4040, 5000, 3040 ]
