const request = './../data/temples.json';
const cards = document.querySelector('.cards');

function displayTemples(temple) {

  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let picture = document.createElement('img');

  h2.textContent = `${temple.name}`;
  p1.textContent = `Address: ${temple.address}`;
  p2.textContent = `Phone Number: ${temple.telephone}`;
  picture.setAttribute('src', temple.imageurl);
  picture.setAttribute('alt', `${temple.name}`);
  picture.setAttribute('loading', 'lazy');

  card.appendChild(h2);
  card.appendChild(picture);
  card.appendChild(p1);
  card.appendChild(p2);

  cards.appendChild(card);

}

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEeach(displayTemples);
  });