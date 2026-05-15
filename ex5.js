// Reuses parseIntList and sumMultiples from ex4.js
// parse() throws "NaN" for any non-integer token
let parse = (i) => {
  let o = parseInt(i);
  if (isNaN(o)) throw "NaN";
  return o;
};

//Create a modified version of ex4 that prepends "corrupt" where an error occurs

//Examples ()
// 2 3 5 67
// corrupt : 2 3 5 67

//Actually this one will not result in an error unless you throw one as in parse(i) above:
// 3 5 hello: 1 2 3 4 5 6 7 8 9
// corrupt : 3 5 hello: 1 2 3 4 5 6 7 8 9

// Version 1 — prepend "corrupt" on ANY error (no colon = no split = NaN thrown)
let processCorrupt = (input) => {
  try {
    let [factorsPart, multiplesPart] = input.split(":");
    // parse() throws if any token is not a valid integer
    let factors   = factorsPart.trim().split(/\s+/).map(parse);
    let multiples = multiplesPart.trim().split(/\s+/).map(parse);
    let result    = sumMultiples(factors, multiples);
    return `${result} : ${input.trim()}`;
  } catch (e) {
    return `corrupt : ${input.trim()}`;
  }
};

//Create a further version that will output the answer omitting corrupted values
//or "corrupt" if it cannot be resolved

// 3 5 hello: 1 2 3 4 5 6 7 8 9
// 23 : 3 5 hello: 1 2 3 4 5 6 7 8 9

//this cannot be fixed - actually this is the only one that will throw errors
// 2 3 5 67
// corrupt : 2 3 5 67

// Version 2 — skip bad factor tokens; still "corrupt" if no colon separator exists
let processSkipCorrupt = (input) => {
  // No colon means we can't separate factors from multiples — unrecoverable
  if (!input.includes(":")) return `corrupt : ${input.trim()}`;

  let [factorsPart, multiplesPart] = input.split(":");

  // Filter out non-integer tokens instead of throwing
  let factors   = factorsPart.trim().split(/\s+/).filter(t => !isNaN(parseInt(t))).map(Number);
  let multiples = multiplesPart.trim().split(/\s+/).filter(t => !isNaN(parseInt(t))).map(Number);

  // Need at least one valid factor to compute anything
  if (factors.length === 0) return `corrupt : ${input.trim()}`;

  let result = sumMultiples(factors, multiples);
  return `${result} : ${input.trim()}`;
};

// UI handlers
let runEx5a = () => {
  let input  = document.getElementById("ex5ainput").value;
  document.getElementById("ex5aoutput").textContent = processCorrupt(input);
};

let runEx5b = () => {
  let input  = document.getElementById("ex5binput").value;
  document.getElementById("ex5boutput").textContent = processSkipCorrupt(input);
};
