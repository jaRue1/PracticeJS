function animalSound(animalName){
  let noise
if (animalName === 'cat'){
  return 'Meow'
}
if (animalName === 'cow'){
  return 'Moo'
}
if (animalName === 'dog'){
  return 'Woof'
}
else{
  return 'merp'
}
return noise
}
let animal = 'cat'
let animalSounds = animalSound(animal)
console.log(animalSounds);