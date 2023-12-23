let person = {
  firstName: "Rue",
  age: 23,
  tall: true,
}
// destructing the object (do this)
let { firstName, age, tall } = person

console.log("hi may name is ", firstName)

console.log("I am ", age, "years old")

if (tall) {
  console.log("People always joke about the weather with me ")
}
