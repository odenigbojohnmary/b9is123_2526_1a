let listEuler1 = (a, b, l) => {
  let sum = 0;
  for (let x of l) {
    if (x % a === 0 || x % b === 0) sum += x;
  }
  return sum;
};

let listEuler2 = (a, l) => {
  let sum = 0;
  for (let x of l) {
    if (x % a[0] === 0 || x % a[1] === 0) sum += x;
  }
  return sum;
};

let listEuler3 = (a, l) => {
  let sum = 0;
  for (let x of l) {
    let isMultiple = false;
    for (let mult of a) {
      if (x % mult === 0) {
        isMultiple = true;
        break;
      }
    }
    if (isMultiple) sum += x;
  }
  return sum;
};

let eulerlist = () => {
  let aVal = parseInt(document.getElementById('a1').value);
  let bVal = parseInt(document.getElementById('b1').value);
  let lStr = document.getElementById('l').value;
  
  let a = isNaN(aVal) ? 2 : aVal;
  let b = isNaN(bVal) ? 3 : bVal;
  let l = lStr.trim() !== "" ? lStr.split(/[ ,]+/).map(x => parseInt(x)).filter(x => !isNaN(x)) : [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];

  let result = listEuler1(a, b, l);
  alert("Sum of multiples of " + a + " or " + b + " in the list is: " + result);
};

let euler2Lists = () => {
  let aStr = document.getElementById('aList').value;
  let lStr = document.getElementById('mList').value;

  let a = aStr.trim() !== "" ? aStr.split(/[ ,]+/).map(x => parseInt(x)).filter(x => !isNaN(x)) : [2, 3];
  let l = lStr.trim() !== "" ? lStr.split(/[ ,]+/).map(x => parseInt(x)).filter(x => !isNaN(x)) : [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];

  if (a.length !== 2) {
    alert("Please ensure List A contains exactly 2 elements for Part 2.");
    return;
  }

  let result = listEuler2(a, l);
  alert("Sum of multiples of elements in List A found in List L is: " + result);
};

let euler2Lists1 = () => {
  let aStr = document.getElementById('aList').value;
  let lStr = document.getElementById('mList').value;

  let a = aStr.trim() !== "" ? aStr.split(/[ ,]+/).map(x => parseInt(x)).filter(x => !isNaN(x)) : [2, 3, 5];
  let l = lStr.trim() !== "" ? lStr.split(/[ ,]+/).map(x => parseInt(x)).filter(x => !isNaN(x)) : [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];

  let result = listEuler3(a, l);
  alert("Sum of multiples of elements in List A found in List L is: " + result);
};