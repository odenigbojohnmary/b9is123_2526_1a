//Part 1:
//Compute the sum of multiples of a or b found in list l

let listEuler1 = (a, b, l) => {
  let sum = 0;
  for (let num of l) {
    if (num % a === 0 || num % b === 0) sum += num;
  }
  return sum;
};

//Part 2:
//Compute the sum of multiples of elements in list a, found in list l. List a is of length 2

let listEuler2 = (a, l) => {
  //This initializes the sum to 0
  let sum = 0;
  //This loops through numbers from 1 to n-1
  for (let num of l) {
    //This checks if the number is a multiple of a or b
    if (num % a[0] === 0 || num % a[1] === 0) sum += num;
  }
  return sum;
};

//Part 3:
//Compute the sum of multiples of elements in list a, found in list l. List a may be any length

let listEuler3 = (a, l) => {
  //This initializes the sum to 0
  let sum = 0;
  //This loops through numbers from 1 to n-1
  for (let num of l) {
    //This checks if the number is a multiple of a or b
    let isMultiple = false;
    //This loops through numbers from 1 to n-1
    for (let mult of a) {
      //This checks if the number is a multiple of a or b
      if (num % mult === 0) {
        //This adds the number to the sum
        isMultiple = true;
        break;
      }
    }
    if (isMultiple) sum += num;
  }
  return sum;
};

let eulerlist = () => {
  //This gets the values of the input elements identified by id='a1', id='b1' and id='l'
  let aVal = parseInt(document.getElementById('a1').value);
  let bVal = parseInt(document.getElementById('b1').value);
  let lStr = document.getElementById('l').value;
  
  //This checks if the values are not numbers and sets the default values
  let a = isNaN(aVal) ? 2 : aVal;
  let b = isNaN(bVal) ? 3 : bVal;
  let l = lStr.trim() !== "" ? lStr.split(/[ ,]+/).map(x => parseInt(x)).filter(x => !isNaN(x)) : [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];

  let result = listEuler1(a, b, l);
  alert("Sum of multiples of " + a + " or " + b + " in the list is: " + result);
};

let euler2Lists = () => {
  //This gets the values of the input elements identified by id='aList' and id='mList'
  let aStr = document.getElementById('aList').value;
  let lStr = document.getElementById('mList').value;

  //This checks if the values are not numbers and sets the default values
  let a = aStr.trim() !== "" ? aStr.split(/[ ,]+/).map(x => parseInt(x)).filter(x => !isNaN(x)) : [2, 3];
  let l = lStr.trim() !== "" ? lStr.split(/[ ,]+/).map(x => parseInt(x)).filter(x => !isNaN(x)) : [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];

  //This checks if the list a has exactly 2 elements
  if (a.length !== 2) {
    alert("Please ensure List A contains exactly 2 elements for Part 2.");
    return;
  }

  //This calls the listEuler2 function and alerts the result
  let result = listEuler2(a, l);
  alert("Sum of multiples of elements in List A found in List L is: " + result);
};

let euler2Lists1 = () => {
  //This gets the values of the input elements identified by id='aList' and id='mList'
  let aStr = document.getElementById('aList').value;
  let lStr = document.getElementById('mList').value;
//This checks if the values are not numbers and sets the default values
  let a = aStr.trim() !== "" ? aStr.split(/[ ,]+/).map(x => parseInt(x)).filter(x => !isNaN(x)) : [2, 3, 5];
  let l = lStr.trim() !== "" ? lStr.split(/[ ,]+/).map(x => parseInt(x)).filter(x => !isNaN(x)) : [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
//This calls the listEuler3 function and alerts the result
  let result = listEuler3(a, l);
  alert("Sum of multiples of elements in List A found in List L is: " + result);
};