const request = 'https://acondori95.github.io/temple_project/data/temples.json';

function displayTemple(temple) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let img = document.createElement('img');

  h2.textContent = `${temple.name}`;
  h2.setAttribute('id','temple-name');

  img.src = `${temple.imageurl}`;
  img.setAttribute('alt', `${temple.name} picture`);
  img.setAttribute('loading','lazy');

  p1.textContent = `Address: ${temple.address} - ${temple.city}`;

  p2.innerHTML = `Phone Number: ${temple.telephone}`;

  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(p1);
  card.appendChild(p2);

  document.querySelector('cards').appendChild(card);
}

getDirectory();

async function getDirectory() {
  const response = await fetch(request);
  const temple_dir = await response.json();
  temple_dir.forEach(displayTemple);
}