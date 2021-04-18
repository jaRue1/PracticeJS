class God{
  constructor(creator){
    this.firstName = creator
    
  }
  promise(){
    return `You are a child of ${this.firstName}`
  }
  believe(){
    return `Any thing is possible for those that believe `
  }

}
class Man extends God{
  constructor(creator, gender,height,weight,ethnicity){
    super(creator)
    this.gender = gender
    this.height = height
    this.weight = weight
    this.race = ethnicity
  }
  gift(){
    console.log(`${this.believe()} Don't stress  ${this.firstName}  has a plan for you ` )
  }
}

let human = new Man('God','Man',"6'5",'190 lbs','Black')
console.log('----------- When things get tough REMEMBER this-------------')
console.log(human.promise())
console.log(human.gift())
console.log('========== HUMAN ATTRIBUTES ==========')
console.log("I am ",human.gender)
console.log("I'm a lightweight I only weigh ",human.weight)
console.log("I am pretty short I am ",human.height, "inches")
console.log("Say it loud I am ",human.race, " and I am proud ! ")
