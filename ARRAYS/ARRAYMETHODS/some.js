// The some() method checks if any of the elements in an array pass a test (provided as a function).

// The some() method executes the function once for each element present in the array:


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

function fastCars(array) {
  array.forEach(car => {
    if(car.hp >= 700){ 
      console.log(car.carName)
      console.log(car.price)
      console.log(car.age)
    }
  });
} 
function slowCars(array) {
  array.forEach(car => {
    if(car.hp <= 700){ 
      console.log(car.carName)
      console.log(car.price)
      console.log(car.age)
    }
  });
} 

console.log('------------FAST CARS ! --------------')
fastCars(cars)
console.log('-------------------------------------')
console.log('------------SLOW CARS ! --------------')
slowCars(cars)
console.log('-------------------------------------')


