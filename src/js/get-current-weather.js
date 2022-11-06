async function getLocationData(location) {
  let locationName;
  if (location) {
    locationName = location;
  } else {
    const formData = new FormData(document.querySelector("form"));
    locationName = formData.get('location');
  }
  
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=4b49aa39132885dedef1febff0e7aab2`)
  return response.json();
};

export default async function getCurrentWeatherData(coordinates) {  
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=4b49aa39132885dedef1febff0e7aab2`)
  return response.json();
}

export { getLocationData, getCurrentWeatherData }