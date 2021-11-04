
//Your task is to write a function that takes a string and return a new string with all vowels removed.
let str = "This website is for losers LOL!"
function disemvowel(str) {
  var newStr = "";
  for (i = 0; i <= str.length; i++) {
    if (str.charAt(i) != "a" || str.charAt(i) != "e" || str.charAt(i) != "i" || str.charAt(i) != "o" || str.charAt(i) != "u") {
      newStr += str.charAt(i)
    }
    return newStr;
  }
}
const output = disemvowel(str)
console.log(output)