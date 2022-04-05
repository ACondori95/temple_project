const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-3.71722&lon=-38.54306&units=Imperial&exclude=hourly,minutly&appid=e7d484446f21605bcc870dedde9507cd';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let tempStr = jsObject.current.temp;
    let tempF = parseFloat(tempStr);
    let tempInt = tempF.toFixed(0);
    document.getElementById('temp-now').textContent = tempInt.toString();

    const iconSrc = `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@2x.png`;
    const desc = jsObject.current.weather[0].description;
    document.querySelector('#weather-icon').setAttribute('src', iconSrc);
    document.querySelector('#weather-icon').setAttribute('alt', desc);
    document.querySelector('#weather-desc').textContent = desc;

    let humidity = jsObject.current.humidity;
    document.querySelector('#humidity').textContent = humidity;
    for (d=0; d<3; d++) {
      let date_str = '#date' + (d+1).toString();
      let aDate = new Date();
      let tDate = new Date();
      tDate.setDate(aDate.getDate() + d);
      let tDay = tDate.getMonth()+1 + '/' + tDate.getDate();
      document.querySelector(date_str).textContent = tDay;
      let day_temp = '#day-temp' + (d+1).toString();
      let dTemp = jsObject.daily[d].temp.day;
      document.querySelector(day_temp).textContent = dTemp.toFixed(0);
    }

    const alertList = jsObject.alerts;
    if (alertList != undefined) {
      for (i=0; i<alertList.length; i++) {
        let alertDesc = alertList[i].event;
        displayWeatherAlert(alertDesc);
      }
    }

    function displayWeatherAlert(adesc) {
      let amsg = document.createElement('div');
      let p1 = document.createElement('p');
      let b2 = document.createElement('button');

      amsg.classList.add('alert-divs');
      p1.textContent = `${adesc}`;
      amsg.appendChild(p1);
      b2.textContent = 'X';
      b2.onclick = 'closealert()';
      amsg.appendChild(b2);
      document.querySelector('#wthalert').appendChild(amsg);
    }

    function closealert() {
      
    }
  })