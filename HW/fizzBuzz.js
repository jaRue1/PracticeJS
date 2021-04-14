// this is my fizz buzz program 

let array = new Array(100);
        for (let i = 0; i < 100; i++) {
            array[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
        }
        for (let i = 0; i < array.length; i++) {
          if (array[i]%3 == 0 && array[i]%5 == 0) {
            console.log('Fizz Buzz', array[i])
          }
          else if (array[i]%3 == 0) {
            console.log('Fizz ', array[i]); //This prints the values that you stored in the array
          }
          else if (array[i]%5 == 0 ){
            console.log('Buzz ', array[i]);
          }
          else{
            console.log('Nope ',array[i])
          } 
        }