//redefine these - ex1 should output the solution to project Euler Q1
//https://projecteuler.net/problem=1
//ex2 should output the sum of all multiples of a or b less than n


// project Euler part 1 question
// Find the sum of all the multiples of 3 or 5 below 1000.

let euler1=()=>{
  //This initializes the sum to 0
  let sum = 0;
  //This loops through numbers from 1 to 999
  for (let i = 1; i < 1000; i++) {
    //This checks if the number is a multiple of 3 or 5
    if (i % 3 === 0 || i % 5 === 0) {
      //This adds the number to the sum
      sum += i;
    }
  }
  alert("Project Euler 1 Solution: " + sum);
};

let eulerCustom=()=>{
  //This gets the values of the input elements identified by id='a', id='b' and id='n'
  let a = parseInt(document.getElementById('a').value);
  let b = parseInt(document.getElementById('b').value);
  let n = parseInt(document.getElementById('n').value);

  //This checks if the values are not numbers
  if (isNaN(a) || isNaN(b) || isNaN(n)) {
    alert("Please enter valid integers for A, B, and N.");
    //This stops the function
    return;
  }
  //This initializes the sum to 0
  let sum = 0;
  //This loops through numbers from 1 to n-1
  for (let i = 1; i < n; i++) {
    //This checks if the number is a multiple of a or b
    if (i % a === 0 || i % b === 0) {
      //This adds the number to the sum
      sum += i;
    }
  }
  alert("Sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum);
};