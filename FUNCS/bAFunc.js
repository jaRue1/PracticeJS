// write a function using big arrow notation
let num1 = 2
let num2 = 3
// constant variable Sum assigned the value of the anonymous function 
// big arrow notation is written as follows
// (( Parameters ) => { function })
const Sum = ((x,y) =>  {
  let result = x + y
  return result
})
console.log("This is big arrow notation :  Sum = " + Sum(num1,num2))