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

// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize (str) {
  let splitString = str.split('-');
  let capitalizedArray = splitString.slice(1).map(capitalized => capitalized.charAt(0).toUpperCase() + capitalized.slice(1));
  let capitalizedString = capitalizedArray.join('');
  let camelized = splitString[0].concat(capitalizedString);
  console.log(camelized);
}

console.log(camelize("-webkit-transition"));