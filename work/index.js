// side note when using faker be sure to use node -v 11.5.0 and npm i faker@5.5.3 the latest version is unstable
const faker = require("faker")
const { fa } = require("faker/lib/locales")

// Lets make some fake users

function makeFakeUsers() {
  let fakeUsers = []
  for (let i = 0; i < 100; i++) {
    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let jobTitle = faker.name.jobTitle()
    let phoneNumber = faker.phone.phoneNumber()
    let accountNumber = faker.finance.account(12) // give a random 12 digit account #
    let balance = Number(faker.finance.amount(100, 1000000, 2))
    if (i <= 20) {
      const routingNumber = 111111111
      const company = "Tech A"
      fakeUsers.push({
        id: i,
        firstName: firstName,
        lastName: lastName,
        jobTitle: jobTitle,
        phoneNumber: phoneNumber,
        accountNumber: accountNumber,
        currentBalance: balance,
        routingNumber: routingNumber,
        company: company,
      })
    } else if (i >= 21 && i <= 50) {
      const routingNumber = 222222222
      const company = "Tech B"
      fakeUsers.push({
        id: i,
        firstName: firstName,
        lastName: lastName,
        jobTitle: jobTitle,
        phoneNumber: phoneNumber,
        accountNumber: accountNumber,
        currentBalance: balance,
        routingNumber: routingNumber,
        company: company,
      })
    } else if (i >= 51 && i <= 70) {
      const routingNumber = 333333333
      const company = "Tech C"
      fakeUsers.push({
        id: i,
        firstName: firstName,
        lastName: lastName,
        jobTitle: jobTitle,
        phoneNumber: phoneNumber,
        accountNumber: accountNumber,
        currentBalance: balance,
        routingNumber: routingNumber,
        company: company,
      })
    } else if (i >= 71 && i <= 99) {
      // from ids 71-99 444444444 routing number
      const routingNumber = 444444444
      const company = "Tech D"
      fakeUsers.push({
        id: i,
        firstName: firstName,
        lastName: lastName,
        company: company,
        jobTitle: jobTitle,
        phoneNumber: phoneNumber,
        accountNumber: accountNumber,
        currentBalance: balance,
        routingNumber: routingNumber,
      })
    }
  }
  return fakeUsers
}
let users = makeFakeUsers() // this becomes array of 100 objects

// console.log("All Users !!")
console.log(users)

// array methods
// array.methodName( () => {} )

// find a user that has an id of 21
let findFakeUser = users.find((user) => {
  return user.id === 21
})
console.log("User # 21 !")
console.log(findFakeUser)

// list all of an array objects with the just the firstName's of the users
let fakeUserFullNames = users.map((user) => {
  const fullName = user.firstName + " " + user.lastName
  return fullName
})
console.log("User Full Names !!")
console.log(fakeUserFullNames)

// filter out all users with an id greater than 30 but less 45 (31 to 44)
let chosenFakeUsers = users.filter((user) => {
  if (user.id > 30 && user.id < 45) {
    return user
  }
})
console.log("The Chosen 15")
console.log(chosenFakeUsers)

// // coming soon

// forEach() user in company TECH B print out there names in Alphabetical Order
const companyNames = []
function getNames() {
  users.forEach((user) => {
    if (user.company == "Tech B")
      // push()
      companyNames.push(user.firstName + " " + user.lastName)
  })
}
getNames()
console.log("Tech B Names !!")
// sort() this array alphabetically
companyNames.sort()
for (const iterator of companyNames) {
  console.log(iterator) // print out each name
}

// get the top 5 earners in company Tech A and Tech B

function getTopEarnersInCompany(users, company) {
  return [...users]
    .filter((user) => user.company === company)
    .sort((a, b) => {
      if (a.currentBalance < b.currentBalance) return -1
      if (a.currentBalance > b.currentBalance) return 1
      return 0
    })
    .slice(-5) // slice()
}
// find top earners within users array
const company1 = getTopEarnersInCompany(users, "Tech A")
const company2 = getTopEarnersInCompany(users, "Tech B")
console.log("Company A Top Earners", company1)
console.log("Company B Top Earners", company2)
// shift

// unshift()

// pop()

// reduce()
