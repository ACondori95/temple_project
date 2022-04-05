const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('header-date').textContent = new Date().toLocaleDateString('en-uk', options);