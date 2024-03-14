const apiKey = "e83f31d3aecd9d9be6d442bfe5c3bcf9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const searchBox = document.querySelector('#search input');
const searchBtn = document.querySelector('#search button');
const weatherIcon = document.querySelector('.weather-icon');


searchBtn.addEventListener('click' , () =>{
 
  if(searchBox.value){
  checkweather(searchBox.value);
  document.querySelector('.weather').style.display = 'block';

  }
});


async function checkweather(city){

 const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

if(response.status == 404){
  document.querySelector('#error').style.display = 'block';
  document.querySelector('.weather').style.display = 'none';
}

else{

 let data = await response.json();
 
 document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ` °C`;
 document.querySelector('.city').innerHTML = data.name;
 document.querySelector('.humidity').innerHTML = data.main.humidity + `%`;
 document.querySelector('.wind').innerHTML = data.wind.speed + `Km/h`;

 if(data.weather[0].main == 'Clouds'){
  weatherIcon.src = 'clouds.png';
 }
 else if(data.weather[0].main == 'Clear'){
  weatherIcon.src = 'clear.png';
 }
 else if(data.weather[0].main == 'Rain'){
  weatherIcon.src = 'rain.png';
 }
 else if(data.weather[0].main == 'Drizzle'){
  weatherIcon.src = 'drizzle.png';
 }
 else if(data.weather[0].main == 'Mist'){
  weatherIcon.src = 'mist.png';
 }
 else if(data.weather[0].main == 'Haze'){
  weatherIcon.src = 'haze.png';
 }

 document.querySelector('#error').style.display = 'none';
 document.querySelector('.weather').style.display = 'block';

}

}
