// create an array of 7 cars and return a list of the top 3 fastest cars.
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
// this for loop logs the top 3 most expensive cars in the array
console.log('---------- $$$$ CARS -------------------')
for (let i = 0; i < cars.length; i++) {
  const element = cars;
  if(cars[i].price >= 600000){
    console.log('Name :',element[i].carName)
    console.log('Price: ',element[i].price)
    console.log('Year :',element[i].age)
    console.log('----------------------------------')
  }
  
}
// used .filter to return array of cars with the most hp
const fastCars = cars.filter((fcars) =>{
  if(fcars.hp >=750){
    return fcars
  }
})
console.log('----------- FAST CARS -------------')
console.log(fastCars)
console.log('-----------------------------------')