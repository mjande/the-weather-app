import '../styles/styles.scss';
import { getLocationData, getCurrentWeatherData } from './get-current-weather';
import displayCurrentWeather from './display-current-weather'

async function updateCurrentWeather(e) {
  e.preventDefault();
  
  const locationData = await getLocationData();
  const locationName = `${locationData[0].name}, ${locationData[0].country}`
  const coordinates = { lat: locationData[0].lat,
                        lon: locationData[0].lon }

  const weatherData = await getCurrentWeatherData(coordinates);
  displayCurrentWeather(locationName, weatherData); // Write module for this
};

const form = document.querySelector("form");
form.onsubmit = updateCurrentWeather;


