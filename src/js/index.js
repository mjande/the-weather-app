import '../styles/styles.scss';
import getcurrentWeather from './current-weather';

async function getWeather(e) {
  e.preventDefault();
  
  const weather = getcurrentWeather();
  // displayCurrentWeather(weather); // Write module for this
};

const form = document.querySelector("form");
form.onsubmit = getWeather;


