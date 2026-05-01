//write a function to alert if overweight (15kg) baggage

//call it from the page

            //alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed

            // Constants for business rules
const MAX_WEIGHT = 15;
let check = () => {
  let weightInput = document.getElementById('weight');
  let weight = parseInt(weightInput.value);
  
  if (isNaN(weight)) {
    alert('Please enter a valid weight.');
    return;
  }
  
  alert('Checking Baggage weight: ' + weight + 'kg');
  
  if (weight > MAX_WEIGHT) {
    alert('Baggage is overweight! Maximum allowed is' + MAX_WEIGHT + 'kg.');
    document.getElementById('removed').style.display = 'inline-block';
    document.getElementById('remB').style.display = 'inline-block';
  } else {
    alert('Baggage weight is OK. You may proceed.');
    document.getElementById('removed').style.display = 'none';
    document.getElementById('remB').style.display = 'none';
  }
};

let remove = () => {
  let weightInput = document.getElementById('weight');
  let removedInput = document.getElementById('removed');
  
  let currentWeight = parseInt(weightInput.value);
  let amountToRemove = parseInt(removedInput.value);
  
  if (isNaN(amountToRemove) || amountToRemove <= 0) {
    alert('Please enter a valid amount to remove.');
    return;
  }
  
  let newWeight = currentWeight - amountToRemove;
  if (newWeight < 0) newWeight = 0;
  
  weightInput.value = newWeight;
  removedInput.value = '';
  
  alert('Removed ' + amountToRemove + 'kg. New weight is: ' + newWeight + 'kg');
  
  if (newWeight <= MAX_WEIGHT) {
    alert('Baggage weight is now OK. You may proceed.');
    document.getElementById('removed').style.display = 'none';
    document.getElementById('remB').style.display = 'none';
  } else {
    alert('Baggage is still overweight. Please remove more.');
  }
};

