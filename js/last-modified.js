const lastMod = new Date(document.lastModified);
let strLastMod = 'Last Updated: ' + lastMod.getMonth()+1 + '/' + lastMod.getDate() + '/' + lastMod.getFullYear() + ' ' + lastMod.getHours() + ':' + lastMod.getMinutes() + ':' + lastMod.getSeconds();
document.getElementById('date-modified').textContent = strLastMod;