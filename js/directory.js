const requestURL = 'https://acondori95.github.io/temple_project/data/temples.json';

function displayTemple(temple) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h3 = document.createElement('h3');
  let fieldset1 = document.createElement('fieldset');
  let legend1 = document.createElement('legend');
  let fieldset2 = document.createElement('fieldset');
  let legend2 = document.createElement('legend');
  let fieldset3 = document.createElement('fieldset');
  let legend3 = document.createElement('legend');
  let fieldset4 = document.createElement('fieldset');
  let legend4 = document.createElement('legend');
  let fieldset5 = document.createElement('fieldset');
  let legend5 = document.createElement('legend');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  let p5 = document.createElement('p');
  let p6 = document.createElement('p');
  let a = document.createElement('a');
  let img1 = document.createElement('img');
  let img2 = document.createElement('img');

  // Change the textContent property of the h3 element tocontain the temple name
  h3.textContent = `${temple.name}`;
  h3.setAttribute('class', 'temple-name small');
  // Add/append the section(card) with the h3 element
  card.appendChild(h3);

  // Change the src and alt properties of the img1 element to contain the temple icon
  let likeimg = './images/dislike.svg';
  img2.src = `${likeimg}`;
  img2.setAttribute('alt', 'like button');
  img2.setAttribute('class', 'likebutton');
  card.appendChild(img2);

  // Change the src and alt properties of the img1 element to contain the temple icon
  img1.src = `${temple.imageurl}`;
  img1.setAttribute('alt', `${temple.name} picture`);
  img1.setAttribute('loading', 'lazy');
  card.appendChild(img1);

  legend1.textContent = 'Information';
  fieldset1.appendChild(legend1);
  // Change the textContent property of the p1 element yo contain the 1 line temple address
  p1.textContent = `${temple.address}`;
  fieldset1.appendChild(p1);
  // Change the textContent property of the p2 element to contain the temple phone number
  p2.textContent = `${temple.telephone}`;
  fieldset1.appendChild(p2);
  // Change the properties of the a element to contain the temple website
  a.href = `${temple.ordinance}`;
  a.target = '_blank';
  a.textContent = 'Visit Website';
  fieldset1.appendChild(a);
  // Add/append the section(card) with the a element
  card.appendChild(fieldset1);

  // Change the textContent property of the p3 element to contain the temple status
  legend2.textContent = 'Status';
  fieldset2.appendChild(legend2);
  p3.textContent = `${temple.status}`;
  fieldset2.appendChild(p3);
  // Add/append the section(card) with the p3 element
  card.appendChild(fieldset2);

  legend3.textContent = 'Services';
  fieldset3.appendChild(legend3);
  // Change the textContent property of the p4 element to contain the temple services
  p4.innerHTML = `${temple.services}`;
  // Add/append the section(card) with the p4 element
  fieldset3.appendChild(p4);
  card.appendChild(fieldset3);

  legend4.textContent = 'Closures';
  fieldset4.appendChild(legend4);
  // Change the textContent property of the p5 element to contain the temple closures
  p5.innerHTML = `${temple.closure}`;
  // Add/append the section(card) with the p5 element
  fieldset4.appendChild(p5);
  card.appendChild(fieldset4);

  legend5.textContent = 'History';
  fieldset5.appendChild(legend5);
  // Change the textContent property of the p6 element to contain the temple history
  p6.innerHTML = `${temple.history}`;
  fieldset5.appendChild(p6);
  // Add/append the sectio(card) with the p6 element
  card.appendChild(fieldset5);
  // Add/append the existing HTML div with the card class with the section(card)
  document.querySelector('#templelist').appendChild(card);
}

getTemples();

async function getTemples() {
  const response = await fetch(requestURL);
  const temples = await response.json();
  temples.forEach(displayTemple);
}