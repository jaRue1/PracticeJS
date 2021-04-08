
// standard function 
function calcTax(total, taxRate) {
  const tax = total * taxRate
return tax
 } 
let myTax = calcTax(7.25, 0.07) 


const square = function(num) { return num * num } // anonymous function
const square1 = (num) => { return num * num } // big arrow notation 

let x = square(4) // this should equal 16