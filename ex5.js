let parse=(i)=>{
  let o=parseInt(i);
  if (isNaN(o))
    throw("NaN");
  return o;
}

//Create a modified version of ex4 that prepends "corrupt" where an error occurs
let processStringStrict = (inputStr) => {
  try {
    let parts = inputStr.split(':');
    if (parts.length !== 2) throw new Error("Missing colon");
    
    let factorsStr = parts[0].trim();
    let multiplesStr = parts[1].trim();
    
    let factors = factorsStr.split(/\s+/).map(parse);
    let multiples = multiplesStr.split(/\s+/).map(parse);
    
    // Assume listEuler3 is available from ex3.js
    let sum = listEuler3(factors, multiples);
    
    return sum + " : " + inputStr;
  } catch (e) {
    return "corrupt : " + inputStr;
  }
};

//Create a further version that will output the answer omitting corrupted values
//or "corrupt" if it cannot be resolved
let processStringLenient = (inputStr) => {
  try {
    let parts = inputStr.split(':');
    if (parts.length !== 2) throw new Error("Missing colon");
    
    let factorsStr = parts[0].trim();
    let multiplesStr = parts[1].trim();
    
    let factors = factorsStr.split(/\s+/).map(x => {
      try { return parse(x); } catch(e) { return null; }
    }).filter(x => x !== null);
    
    let multiples = multiplesStr.split(/\s+/).map(x => {
      try { return parse(x); } catch(e) { return null; }
    }).filter(x => x !== null);
    
    // If we want to return corrupt when no valid numbers are left
    // We can throw here. However, the example shows ignoring 'hello' 
    // and processing valid ones.
    
    // Assume listEuler3 is available from ex3.js
    let sum = listEuler3(factors, multiples);
    
    return sum + " : " + inputStr;
  } catch (e) {
    return "corrupt : " + inputStr;
  }
};
