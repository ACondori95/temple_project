// weather sumary

const apiID = 'e7d484446f21605bcc870dedde9507cd';

const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=38.984653&lon=-77.094711&appid=${apiID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const currently = document.querySelector('#currently');
    currently.innerHTML = `<strong>${jsObject.current.weather[0].description.toUpperCase()}</strong>`;

    const temperature = document.querySelector('#temperature');
    temperature.innerHTML = jsObject.current.temp;

    const humidity = document.querySelector('#humidity');
    humidity.innerHTML = jsObject.current.humidity;

    const wind = document.querySelector('#wind-speed');
    wind.innerHTML = jsObject.current.wind_speed;


    const dayofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'];

    i = 1
    for(z = 1; z < 4; z++) {
      let d = new Date();
      document.getElementById(`dayofweek${z}`).textContent = dayofweek[(d.getDay()) + i];
      document.getElementById(`forecastmin${z}`).innerHTML = jsObject.daily[z].temp.min.toFixed() + '&deg;F';
      document.getElementById(`forecastmax${z}`).innerHTML = jsObject.daily[z].temp.max.toFixed() + '&deg;F';
      document.getElementById(`imgday${z}`).setAttribute('src','https://openweathermap.org/img/w/' + jsObject.daily[z].weather[0].icon + '.png');
      i++;
    }

  })

// wind chill

const tempWind = document.getElementById('temperature').innerHTML;
const wSpeedWind = document.getElementById('wind-speed').innerHTML;
const wChill = document.getElementById('wind-chill');

if (wSpeedWind > 3 && tempWind <= 50) {
  wChill.innerText = Math.round(35.74 + (0.6215 * tempWind) - (35.75 * Math.pow(wSpeedWind,0.16)) + (0.4275 * tempWind * Math.pow(wSpeedWind,0.16)));
} else {
  wChill.innerText = 'N/A';
}