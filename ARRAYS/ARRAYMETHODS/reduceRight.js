//  Subtract the numbers in the array, starting from the right:
let numbers = [100, 50, 25];
 
let n = numbers.reduceRight(myFunc);
function myFunc(total, num) {
  return total - num;
}

console.log(n) // -125
