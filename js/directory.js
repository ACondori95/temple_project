const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

function displayProphets(prophet) {
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let picture = document.createElement('img');

  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  p1.textContent = `Date of Birth: ${prophet.birthdate}`;

  p2.textContent = `Place of Birth: ${prophet.birthplace}`;

  picture.setAttribute('src', prophet.imageurl);
  picture.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
  picture.setAttribute('loading', 'lazy');

  card.appendChild(h2);
  card.appendChild(picture);
  card.appendChild(p1);
  card.appendChild(p2);

  cards.appendChild(card);
}

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  })