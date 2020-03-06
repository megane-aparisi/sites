let city = '';
let state = '';

const weatherLocation = storageGetLocationData();

const weather = initWeather(weatherLocation.city, weatherLocation.state);

const ui = initUI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', e => {
 city = document.getElementById('city').value;
 state = document.getElementById('state').value;

 weatherChangeLocation(city, state);
 storageSetLocationData(city, state);

 getWeather();
 $('#locModal').modal('hide');
});

function getWeather() {
  weatherGetWeather()
  .then(results => {
    uiPaint(results);
  })
  .catch(err => console.log(err));
}

/*Object Destructuring
const {city, state} = initStorage();

*/
