///////Create a function to read a string of the form:
// factors : multiples
//and output a string:
// result : factors : multiples

//where factors and multiples are space separated lists of integers

// Example Input : 
// 3 5 : 1 2 3 4 5 6 7 8 9

// Example Output : 
// 23 : 3 5 : 1 2 3 4 5 6 7 8 9

//keep code DRY (Don't repeat yourself)

let processString = (inputStr) => {
  let parts = inputStr.split(':');
  if (parts.length !== 2) return "Invalid input format. Expected 'factors : multiples'";
  
  let factorsStr = parts[0].trim();
  let multiplesStr = parts[1].trim();
  
  let factors = factorsStr.split(/\s+/).map(x => parseInt(x)).filter(x => !isNaN(x));
  let multiples = multiplesStr.split(/\s+/).map(x => parseInt(x)).filter(x => !isNaN(x));
  
  // Reuse listEuler3 from ex3.js (assumes ex3.js is loaded first in the HTML)
  let sum = listEuler3(factors, multiples);
  
  return sum + " : " + factorsStr + " : " + multiplesStr;
};

//if you're finished, code it into a page

let runEx4 = () => {
  let input = document.getElementById('ex4Input').value;
  let result = processString(input);
  document.getElementById('ex4Result').innerText = result;
};