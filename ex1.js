//write a function to alert if overweight (15kg) baggage

//call it from the page

            //alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed

            // Constants for business rules
const ALLOWED_WEIGHT = 15;
let check = () => {
  //This gets the value of the weight input from the input element identified by id='weight'
  let weightInput = document.getElementById('weight');
  //This converts the value of the weight input to a float (used float to support decimals)
  let weight = parseFloat(weightInput.value);
  //This checks if the value of the weight input is not a number (not a valid number / or empty)
  if (isNaN(weight)) {
    alert('Please enter a valid weight.');
    return;
  }
  
  alert('Checking Baggage weight: ' + weight + 'kg');
  
  //This checks if the weight is greater than the allowed weight (in our case 15kg)
  if (weight > ALLOWED_WEIGHT) {
    alert('Baggage is overweight! Maximum allowed is' + ALLOWED_WEIGHT + 'kg.');
    //This makes the removed text input and button visible
    document.getElementById('removed').style.display = 'inline-block';
    document.getElementById('remB').style.display = 'inline-block';
  } else {
    //This alerts the user that the baggage weight is ok
    alert('Baggage weight is OK. You may proceed.');
    //This hides the removed text input and button
    document.getElementById('removed').style.display = 'none';
    document.getElementById('remB').style.display = 'none';
  }
};

let remove = () => {
  //This gets the value of the weight input from the input element identified by id='weight'
  let weightInput = document.getElementById('weight');
  //This gets the value of the removed input from the input element identified by id='removed'
  let removedInput = document.getElementById('removed');
  //This converts the value of the weight input to a float (used float to support decimals)
  let currentWeight = parseFloat(weightInput.value);
  //This converts the value of the removed input to a float (used float to support decimals)
  let amountToRemove = parseFloat(removedInput.value);
  //This checks if the amount to remove is not a number (not a valid number / or empty)
  //or if the amount to remove is less than or equal to 0
  if (isNaN(amountToRemove) || amountToRemove <= 0) {
    alert('Please enter a valid amount to remove.');
    return;
  }
  //This subtracts the amount to remove from the current weight
  let newWeight = currentWeight - amountToRemove;
  //This checks if the new weight is less than 0
  if (newWeight < 0) newWeight = 0;
  //This updates the weight input with the new weight
  weightInput.value = newWeight;
  //This clears the removed input
  removedInput.value = '';
  
  alert('Removed ' + amountToRemove + 'kg. New weight is: ' + newWeight + 'kg');
  
  //This checks if the new weight is less than or equal to the allowed weight (in our case 15kg)
  if (newWeight <= ALLOWED_WEIGHT) {
    alert('Baggage weight is now OK. You may proceed.');
    //This hides the removed text input and button
    document.getElementById('removed').style.display = 'none';
    document.getElementById('remB').style.display = 'none';
  } else {
    alert('Baggage is still overweight. Please remove more.');
  }
};

