let CITY_ID = '';
const API_KEY = 'e8c1ffc1c921427b9cff32c3f8fd9421';
// API DOCS: https://openweathermap.org/current;

function initWeather(city, state) {
 city = city;
 state = state;
}

async function weatherGetWeather() {
 let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${API_KEY}&units=metric`;
 const response = await fetch(url);

 const responseData = await response.json();
 console.log(responseData);
 return responseData;
}

function weatherChangeLocation(city, state) {

}
