class God{
  constructor(firstName,soul,time,domain){
    this.firstName = firstName
    this.soul = soul
    this.time = time
    this.domain = domain
  }
  believe(){
    return `You are a child of ${this.firstName}`
  }
}
class Man extends God{
  constructor(gender,height,weight,race){
    super(firstName,soul,time,domain)
    this.gender = gender
    this.height = height
    this.weight = weight
    this.race = race
  }
  gift(){
    console.log(this.believe() + ' and the ' + this.race + 'race has dominion over the ' + this.domain)
  }
}