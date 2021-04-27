// The reduce() method reduces the array to a single value.

// The reduce() method executes a provided function for each value of the array (from left-to-right).

// The return value of the function is stored in an accumulator (result/total).

let numbers = [100, 50, 25];
 
let n = numbers.reduce(myFunc);
function myFunc(total, num) {
  return total - num;
}

console.log(n) // 25