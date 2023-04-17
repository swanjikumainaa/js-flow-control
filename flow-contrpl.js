// Write a function that accepts an array of strings and console.logs each element using a for loop.
function logStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }

    const myArray = ['hello', 'world', 'how', 'are', 'you'];
    logStrings(myArray); 

  }
  
// Write a function that accepts an array of numbers and uses the forEach() method to console.log eachnumber multiplied by 2.
function logArrayDoubled(Array) {
   Array.forEach(function(num) {
      console.log(num * 2);
    });
    const numbers = [1, 2, 3, 4, 5];
    logArrayDoubled(numbers); 

  }
  

// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

function operateArray(arr) {
   
    for (let i = 0; i < 4; i++) {
      arr[i] = arr[i] * 8;
    }
    
    
    const lastIndex = arr.length - 1;
    arr[lastIndex] = arr[lastIndex] + 5;
    arr[lastIndex - 1] = arr[lastIndex - 1] + 5;
  
   
    console.log(arr);

const numbers = [1, 2, 3, 4, 5, 6];
operateArray(numbers); 
  }



// Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];

function iterateArray(arr) {
    let i = 0;
    while (i < arr.length) {
      console.log(arr[i]);
      if (i === 3) {
        break;
      }
      i++;
    }

    const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    iterateArray(arrNum); 

  }
  


// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']

function printFruits(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i === 1) {
        continue;
      }
      console.log(arr[i]);
    }
    const fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
    printFruits(fruits); 
  }
  