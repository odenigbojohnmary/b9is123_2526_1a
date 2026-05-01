//redefine these - ex1 should output the solution to project Euler Q1
//https://projecteuler.net/problem=1
//ex2 should output the sum of all multiples of a or b less than n

let euler1=()=>{
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  alert("Project Euler 1 Solution: " + sum);
};

let eulerCustom=()=>{
  let a = parseInt(document.getElementById('a').value);
  let b = parseInt(document.getElementById('b').value);
  let n = parseInt(document.getElementById('n').value);

  if (isNaN(a) || isNaN(b) || isNaN(n)) {
    alert("Please enter valid integers for A, B, and N.");
    return;
  }

  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (i % a === 0 || i % b === 0) {
      sum += i;
    }
  }
  alert("Sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum);
};