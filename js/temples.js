const requestData = 'https://acondori95.github.io/temple_project/data/temples.json';


function displayTemple(temple) {
  let card = document.createElement('section');
  let h3 = document.createElement('h3');
  let likeImg = './images/dislike.svg';
  let img1 = document.createElement('img');
  let img2 = document.createElement('img');
  let legend1 = document.createElement('legend');
  let legend2 = document.createElement('legend');
  let fieldset1 = document.createElement('fieldset');
  let fieldset2 = document.createElement('fieldset');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let a = document.createElement('a');

  h3.textContent = `${temple.name}`;
  h3.setAttribute('class', 'temple-name small-shown');
  card.appendChild(h3);

  img2.setAttribute('src', `${likeImg}`);
  img2.setAttribute('alt', 'like button');
  img2.setAttribute('class', 'like-button');
  card.appendChild(img2);

  img1.setAttribute('src', `${temple.imageurl}`);
  img1.setAttribute('alt', `${temple.name} photo`);
  img1.setAttribute('loading', 'lazy');
  card.appendChild(img1);

  legend1.textContent = 'Information';
  fieldset1.appendChild(legend1);
  p1.textContent = `${temple.address}`;
  fieldset1.appendChild(p1);
  p2.textContent = `${temple.telephone}`;
  fieldset1.appendChild(p2);
  a.textContent = 'Visit Website';
  a.setAttribute('href', `${temple.ordinance}`);
  a.setAttribute('target', '_blank');
  fieldset1.appendChild(a);
  card.appendChild(fieldset1);

  legend2.textContent = 'Status';
  fieldset2.appendChild(legend2);
  p3.textContent = `${temple.status}`;
  fieldset2.appendChild(p3);
  card.appendChild(fieldset2);

  document.querySelector('#templelist').appendChild(card);
  // let fieldset3 = document.createElement('fieldset');
  // let legend3 = document.createElement('legend');
  // let fieldset4 = document.createElement('fieldset');
  // let legend4 = document.createElement('legend');
  // let fieldset5 = document.createElement('fieldset');
  // let legend5 = document.createElement('legend');
  // let p4 = document.createElement('p');
  // let p5 = document.createElement('p');
  // let p6 = document.createElement('p');

  // legend3.textContent = 'Services';
  // fieldset3.appendChild(legend3);
  // p4.innerHTML = `${temple.services}`;
  // fieldset3.appendChild(p4);
  // card.appendChild(fieldset3);

  // legend4.textContent = 'Closures';
  // fieldset4.appendChild(legend4);
  // p5.innerHTML = `${temple.closure}`;
  // fieldset4.appendChild(p5);
  // card.appendChild(fieldset4);

  // legend5.textContent = 'History';
  // fieldset5.appendChild(legend5);
  // p6.innerHTML = `${temple.history}`;
  // fieldset5.appendChild(p6);
  // card.appendChild(fieldset5);

  // document.querySelector('#templelist').appendChild(card);
}


console.log('Load Directory');
getDirectory();

async function getDirectory() {
  console.log('get data');
  const response = await fetch(requestData);
  const temple_dir = await response.json();
  temple_dir.forEach(displayTemple);
}



// const requestData = "https://acondori95.github.io/wdd230/chamber/data/data.json";

// function displayTemples(business) {
//   let card = document.createElement('section');
//   let h3 = document.createElement('h3');
//   let p1 = document.createElement('p');
//   let p2 = document.createElement('p');
//   let p3 = document.createElement('p');
//   let p4 = document.createElement('p');
//   let p5 = document.createElement('p');
//   let p6 = document.createElement('p');
//   let a = document.createElement('a');
//   let img1 = document.createElement('img');

//   h2.textContent = `${business.name}`;
//   h2.setAttribute('id','bizname');

//   card.appendChild(h2);

//   img1.src = `${business.imageurl}`;
//   img1.setAttribute('alt', `${business.name} icon`);
//   img1.setAttribute('loading', 'lazy');
//   card.appendChild(img1);

//   p1.textContent = `${business.address}`;
//   card.appendChild(p1);

//   p2.innerHTML = `${business.address}`;
//   card.appendChild(p2);

//   p3.textContent = `${business.phone}`;
//   card.appendChild(p3);

//   a.href = `${business.website}`;
//   a.target = '_blank';
//   a.textContent = `${business.contact}`;

//   document.querySelector('#templelist').appendChild(card);
// }

// console.log('Load Directory');
// getDirectory();

// async function getDirectory() {
//   console.log('get data');
//   const response = await fetch(requestData);
//   const business_dir = await response.json();
//   business_dir.forEach(displayTemples);
// }