// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


// A Simple Solution is to run two nested loops. The outer loop picks all elements one by one and the inner loop counts the number of occurrences of the element picked by the outer loop. The time complexity of this solution is O(n2).
// Below is the implementation of the brute force approach : 

// let doTest = [20,1,-1,2,-2,3,3,5,1,2,2,4,20,4,-1,-2,5]
let doTest = [ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]
let size = doTest.length
function findOdd(array,size) {
  for (let i = 0; i < size; i++) {
    let counter = 0 

    for (let j = 0; j < size; j++) {
         if (array[i] == array[j]){
          counter++
         }
    }
    if(counter % 2 != 0) {
      return array[i]
    }  
  }
  return -1
  
}

const x = findOdd(doTest,size)
console.log(x)