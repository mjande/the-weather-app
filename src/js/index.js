import '../styles/styles.scss';
import { getLocationData, getCurrentWeatherData } from './get-current-weather';
import displayCurrentWeather from './display-current-weather'

async function updateCurrentWeather(e) {
  e.preventDefault();
  document.querySelector('.error').textContent = '';
  
  try {
    const locationData = await getLocationData();
    const locationName = `${locationData[0].name}, ${locationData[0].country}`
    const coordinates = { lat: locationData[0].lat,
                          lon: locationData[0].lon }
  
    const weatherData = await getCurrentWeatherData(coordinates);
    displayCurrentWeather(locationName, weatherData); // Write module for this
  } catch {
    document.querySelector('.error').textContent = 'Could not find a city by that name. Please change your search and try again.';
  }
};

async function pageLoad() {
  const locationData = await getLocationData('Chicago');
  const locationName = `${locationData[0].name}, ${locationData[0].country}`
  const coordinates = { lat: locationData[0].lat,
                        lon: locationData[0].lon }

  const weatherData = await getCurrentWeatherData(coordinates);
  displayCurrentWeather(locationName, weatherData);
}

const form = document.querySelector("form");
form.onsubmit = updateCurrentWeather;

pageLoad();

