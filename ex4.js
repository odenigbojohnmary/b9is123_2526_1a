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

//if you're finished, code it into a page

// --- Shared helpers (reused by ex5) ---

// Parse a space-separated string of integers into an array of numbers
let parseIntList = (str) => str.trim().split(/\s+/).map(Number);

// Sum multiples: sum every number in `multiples` that is divisible by at least one factor
let sumMultiples = (factors, multiples) =>
  multiples
    .filter(m => factors.some(f => m % f === 0))
    .reduce((acc, m) => acc + m, 0);

// Core function: accepts "factors : multiples" string, returns "result : factors : multiples"
let processFactorsMultiples = (input) => {
  let [factorsPart, multiplesPart] = input.split(":");
  let factors   = parseIntList(factorsPart);
  let multiples = parseIntList(multiplesPart);
  let result    = sumMultiples(factors, multiples);
  return `${result} : ${input.trim()}`;
};

// UI handler
let runEx4 = () => {
  let input  = document.getElementById("ex4input").value;
  let output = document.getElementById("ex4output");
  try {
    output.textContent = processFactorsMultiples(input);
  } catch (e) {
    output.textContent = "Error: " + e;
  }
};