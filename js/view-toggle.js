const ww = window.innerWidth;

if (ww >= 592 && ww <= 991) {
  toggleView();
}

function toggleView() {
  document.getElementById('card-btn').classList.toggle('open');
  document.getElementById('cards').classList.toggle('open');
}

const c = document.getElementById('card-btn');
c.onclick = toggleView;