import { toDate, fromUnixTime } from 'date-fns';

export default function displayCurrentWeather(locationName, weatherData) {
  // Location
  document.querySelector('.current-location').textContent = locationName;

  // Date
  document.querySelector('.current-date').textContent = toDate(weatherData.dt);

  // Temperature
  document.querySelector('.current-temp').textContent = weatherData.main.temp;

  // Feels like
  document.querySelector('.current-feel-temp').textContent = weatherData.main.feels_like;

  // Low Temperature
  document.querySelector('.current-high-temp').textContent = weatherData.main.temp_max;

  // High temperature
  document.querySelector('.current-low-temp').textContent = weatherData.main.temp_min;

  // Sunrise
  document.querySelector('.current-sunrise-time').textContent = fromUnixTime(weatherData.sys.sunrise);

  // Sunset 
  document.querySelector('.current-sunset-time').textContent = fromUnixTime(weatherData.sys.sunset)

  // Visibility
  const visInKm = weatherData.visibility / 1000
  document.querySelector('.current-visibility').textContent = `Visibility: ${visInKm}km`
}