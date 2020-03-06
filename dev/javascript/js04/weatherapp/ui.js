function initUI() {
    this.city = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
}

function uiPaint(weather) {
    this.city.textContent = weather.name;
    this.desc.textContent = weather.name;
    this.string.textContent = weather.temp;
    this.icon.setAttribute(
        'src',
        `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}`;
}
