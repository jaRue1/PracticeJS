class God {
  constructor(creator) {
    this.firstName = creator
  }
  promises() {
    return `You are a child of ${this.firstName}`
  }
  believe() {
    return `Any thing is possible for those that believe `
  }
}
class Man extends God {
  constructor(creator, gender, height, weight, ethnicity) {
    super(creator)
    this.gender = gender
    this.height = height
    this.weight = weight
    this.race = ethnicity
  }
  gift() {
    return `${this.believe()} Don't stress  ${
      this.firstName
    }  has a plan for you `
  }
}

let man = new Man("God", "Man", "6'5", "190 lbs", "Black")

console.log("----------- When things get tough REMEMBER this-------------")
console.log(man.promises())
console.log(man.gift())
console.log("========== HUMAN ATTRIBUTES ==========")
console.log("I am ", man.gender)
console.log("I'm a lightweight I only weigh ", man.weight)
console.log("I am pretty short I am ", man.height, "inches")
console.log("Say it loud I am ", man.race, " and I am proud ! ")
