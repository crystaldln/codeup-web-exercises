"use strict";

// Exercise 1 & 2


 function showMultiplicationTable(number) {
     for(let i = 1; i <=10; i++){
         console.log(number * i);
     }


 }

 showMultiplicationTable(7);

// Exercise 3

 function getRandomNumber(min,max) {
  return Math.random() * (max - min) + min;
 }

 var result = Math.floor(Math.random());

 console.log(Math.random());


// Exercise 4
const loopNumber = 1;

for (let i = 0; i < loopNumber; i++) {
    console.log(loopNumber);
}




// Exercise 5

  for (var i = 100; i >= 5; i = i - 5) {
      console.log(i);
  }


