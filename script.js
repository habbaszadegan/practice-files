// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with 
// the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with 
// createElement, append the <h1> and <p> to it before adding it 
// to the container.

// const parentNode = document.querySelector('#container');

// const pRed = document.createElement('p');
// const h3Blue = document.createElement('h3');
// const divBlackNPink = document.createElement('div');
// const h1InDiv = document.createElement('h1');
// const pMe2 = document.createElement('p');
// const btn = document.querySelector('#btn');

// parentNode.appendChild(pRed);
// parentNode.appendChild(h3Blue);
// parentNode.appendChild(divBlackNPink);
// divBlackNPink.appendChild(h1InDiv);
// divBlackNPink.appendChild(pMe2);

// pRed.style.color = 'red';
// pRed.textContent = `Hey I'm red!`;
// h3Blue.style.color = 'blue';
// h3Blue.textContent = `I'm a blue h3!`;
// divBlackNPink.setAttribute = ('style', 'border: black; background: pink;');
// h1InDiv.textContent = `I'm in a div`;
// pMe2.textContent = `ME TOO!`;


// btn.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
//   });


// -------------------------------------------------------------------
// Array Methods Practice

// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.


// function camelize (str) {
//   let splitString = str.split('-');
//   let capitalizedArray = splitString.slice(1).map(capitalized => capitalized.charAt(0).toUpperCase() + capitalized.slice(1));
//   let capitalizedString = capitalizedArray.join('');
//   let camelized = splitString[0].concat(capitalizedString);
//   console.log(camelized);
// }

// console.log(camelize("-webkit-transition"));

// -------------------------------------------------------------------

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or 
// equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.
// For instance:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)

// function filterRange(arr, a, b) {
//   // take in array and run a filter on it.
//   // check if the value is <= a and >=b
//   // return the new array
//   let filteredArray = arr.filter(ar => ar >= a && ar <= b);
//   return filteredArray;
// }

// let array = [5, 3, 8, 1];

// console.log(filterRange(array, 1, 4));

// -------------------------------------------------------------------

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values 
// except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.
// For instance:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]

// function filterRangeInPlace (arr, a, b) {
//   // run a loop and if statement checking if the number[i] is within range
//   // splice array at current index
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= a && arr[i] >= b) {
//       arr.splice(i, 1);
//     }
//   }
// }
// let array = [5, 3, 8, 1];
// filterRangeInPlace(array, 1, 4)
// console.log(array);

// -------------------------------------------------------------------

// Sort in decreasing order
// importance: 4
// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10

let arr = [5, 2, 1, -10, 8];

let sortedArr = arr.sort((a, b) => a > b ? -1 : 1);

console.log(sortedArr);
