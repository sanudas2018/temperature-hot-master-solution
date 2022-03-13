// 93b842bd1f5000942a8c7b760fbd962e
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// http://openweathermap.org/img/wn/10d@2x.png

// temperatureLocation city-name  cloud location_name temperature cloud-img

const temperatureLocation = () => {
   const API_KEY = `93b842bd1f5000942a8c7b760fbd962e`;
   const input = document.getElementById('city-name');
   const inputValue = input.value;
   // console.log(inputValue)
   const link = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`;
   // console.log(link)
   fetch(link)
      .then(Response => Response.json())
      .then(data => showAllData(data));

   input.value = '';
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText= text;
};
const showAllData = (data) => {
   console.log(data)
   console.log(data.weather[0].icon)
   setInnerText('location_name', data.name);
   setInnerText('temperature', data.main.temp);
   setInnerText('cloud', data.weather[0].main);
  
   const iconLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
   let icon = document.getElementById('cloud-img');
   icon.setAttribute('src', iconLink);
};