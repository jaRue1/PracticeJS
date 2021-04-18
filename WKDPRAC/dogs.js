// create an array of dog and return a list of only the cute dogs
const nikkiDogs = [
  {
    breed: "Pitbull",
    cute: true,
  },
  {
    breed: "German Sheppard",
    cute: true,
  },
  {
    breed: "Boxer",
    cute: false,
  },
  {
    breed: "Shih tzu",
    cute: true,
  },
]
// using a for loop
for (let i = 0; i < nikkiDogs.length; i++) {
  const element = nikkiDogs[i]
  if (nikkiDogs[i].cute === true) {
    console.log(element.breed)
  }
}

// using an array method 
let myDogs = nikkiDogs.filter(dog => {if (dog.cute == true){return dog.breed}})
console.log(myDogs)
