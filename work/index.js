// side note when using faker be sure to use node -v 11.5.0 and npm i faker@5.5.3 the latest version is unstable
const faker = require("faker")
const { fa } = require("faker/lib/locales")
// testing the library

let fName = faker.name.firstName()
let lName = faker.name.lastName()
let jTitle = faker.name.jobTitle()
let pNumber = faker.phone.phoneNumber()

console.log("First Name: " + fName)
console.log("Last Name: " + lName)
console.log("Job Title: " + jTitle)
console.log("Phone Number: " + pNumber)

// Lets make some fake users

function makeFakeUsers() {
  let fakeUsers = []
  for (let i = 0; i < 100; i++) {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let jobTitle = faker.name.jobTitle()
    let phoneNumber = faker.phone.phoneNumber()
    fakeUsers.push({
      id: i,
      firstName: firstName,
      lastName: lastName,
      jobTitle: jobTitle,
      phoneNumber: phoneNumber,
    })
  }
  return fakeUsers
}
let Obj = makeFakeUsers() // this becomes array of 100 objects

console.log("All Users !!")
// console.log(Obj);

// array methods
// array.methodName( () => {} )

// find a user that has an id of 21
let findFakeUser = Obj.find((user) => {
  return user.id === 21
})
console.log("User # 21 !")
console.log(findFakeUser)

// list all of an array objects with the just the firstName's of the users
let fakeUserFullNames = Obj.map((user) => {
  const fullName = user.firstName + " " + user.lastName
  return fullName
})
console.log("User Full Names !!")
console.log(fakeUserFullNames)

// filter out all users with an id greater than 30 but less 45 (31 to 44)
let chosenFakeUsers = Obj.filter((user) => {
  if (user.id > 30 && user.id < 45) {
    return user
  }
})
console.log("The Chosen 15")
console.log(chosenFakeUsers)

// coming soon

// forEach()
const greetings = []
Obj.forEach((user) => {
  greetings.push("Hello " + user.firstName)
})
console.log("Greetings !!")
console.log(greetings)

// slice()

// sort()

// shift

// unshift()

// push()

// pop()

// reduce()
