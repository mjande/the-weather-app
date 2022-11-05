function getLocation() {
  const formData = new FormData(document.querySelector("form"));

  return formData.get('location');
};

async function geocode(location) {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=4b49aa39132885dedef1febff0e7aab2`)
  const locationData = await response.json();
  return { lat: locationData[0].lat, lon: await locationData[0].lon }
};

async function getWeather(coordinates) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=4b49aa39132885dedef1febff0e7aab2`)
  const weatherData = await response.json();
  return weatherData;
};

export default async function getcurrentWeather() {  
  const location = getLocation();
  const coordinates = await geocode(location);

  return getWeather(coordinates); 
}