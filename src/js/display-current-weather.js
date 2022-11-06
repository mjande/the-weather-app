import { format, fromUnixTime } from 'date-fns';

export default function displayCurrentWeather(locationName, weatherData) {
  // Location
  document.querySelector('.current-location').textContent = locationName;

  // Date
  const date = format(new Date(fromUnixTime(weatherData.dt)), 'MMM. do, yyyy');
  document.querySelector('.current-date').textContent = date;

  // Weather Icon 
  const iconCode = weatherData.weather[0].icon;
  document.querySelector('img').src = `http://openweathermap.org/img/wn/${iconCode}.png`

  // Temperature
  const temp = weatherData.main.temp.toPrecision(3);
  document.querySelector('.current-temp').textContent = `${temp}°`;

  // Feels like
  const feelTemp = weatherData.main.feels_like.toPrecision(2);
  document.querySelector('.current-feel-temp').textContent = `${feelTemp}°`

  // Low Temperature
  const lowTemp = weatherData.main.temp_min.toPrecision(3);
  document.querySelector('.current-high-temp').textContent = `${lowTemp}°`

  // High temperature
  const highTemp = weatherData.main.temp_max.toPrecision(3);
  document.querySelector('.current-low-temp').textContent = `${highTemp}°`

  // Sunrise
  const sunriseTime = format(new Date(fromUnixTime(weatherData.sys.sunrise)), 'h:mmaaa');
  document.querySelector('.current-sunrise-time').textContent = sunriseTime;

  // Sunset 
  const sunsetTime = format(new Date(fromUnixTime(weatherData.sys.sunset)), 'h:mmaaa');
  document.querySelector('.current-sunset-time').textContent = sunsetTime;

  // Visibility
  const visInKm = weatherData.visibility / 1000
  document.querySelector('.current-visibility').textContent = `Visibility: ${visInKm}km`
};