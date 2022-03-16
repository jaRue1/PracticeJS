// The slice() method returns the selected elements in an array, as a new array object.

// The slice() method selects the elements starting at the given start argument, 
// and ends at, but does not include, the given end argument.


const cars = [
  {
    carName: "Lamborghini",
    hp: 500,
    price: 500000,
    age: 2018,
  },
  {
    carName: "Nissan GTR",
    hp: 700,
    price: 250000,
    age: 2019,
  },
  {
    carName: "Bentley",
    hp: 750,
    price: 900000,
    age: 2021,
  },
  {
    carName: "McClaren",
    hp: 600,
    price: 330000,
    age: 2017,
  },
  {
    carName: "Ferrari",
    hp: 800,
    price: 950000,
    age: 2021,
  },
  {
    carName: "Chevy 64 Impala",
    hp: 990,
    price: 300000,
    age: 1964,
  },
  {
    carName: "BMW",
    hp: 550,
    price: 670000,
    age: 2020,
  },
]
let n = cars.slice(1,3) // extract's the second and the third elements from the array.
let y = cars.slice(2,5) // extract's the 2nd , 3rd, and 4th elements in the array
console.log('---------------(1, 3)--------------------------')
console.log(n)
console.log('---------------(2, 5)--------------------------')
console.log(y)
console.log('-----------------------------------------------')
