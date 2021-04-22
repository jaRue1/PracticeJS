//The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

let str = "The strange plane took of in spain while changing lanes";
let res = str.match(/ange/g); // output [ 'ange', 'ange' ]

console.log(res)