const WeatherData = {
   Curentconditions : {
     tempreture: {value: 72,  unit: "°F", label: "Temperature"},
     Humidity: {value: 45, unit: "%", label: "Humidity"},
     WindSpeed: { value: 12, label: "Wind Speed"}

   },

alerts: [
   {
      severityClass: "severa",
      title: "severa Thunderstorm warning",
      location: "Denvar CO",
      discription: "large hail and damaging winds expected. Seek shelter immedieatly.",
      chips: ["Thunderstorm", "ID: 1"],
      timeRemaining: "1h remaining"
   }, 
   {
      severityClass: "flood",
      title: "Flash Flood Watch",
      location: "Boulder County, CO",
      description: "Heavy rainfall may lead to flash flooding. Monitor local conditions.",
      chips: ["FLOOD", "ID: 2"],
      timeRemaining: "3h remaining"
   },
   {
      severityClass: "wind",
      title: "High Wind Advisory",
      location: "Fort Collins, CO",
      description: "Winds 25-35 mph with gusts up to 50 mph expected.",
      chips: ["WIND", "ID: 3"],
      timeRemaining: "5h remaining"
  }
]
}


const form = document.querySelector(".search-box");
const zipInput = form.querySelector("input");
const conditionValues = document.querySelectorAll(".condition-value");
const alertCards = document.querySelectorAll(".alert-card");

const API_KEY = "e51f40b629fbc9e9af140c6d81975828";

async function fetchWeatherByZip(zip) {
  
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      
      throw new Error("Invalid ZIP code");
    }

    const data = await response.json();
    
    return data;

  } catch (error) {
    
    console.error(error);
    
    alert("Unable to fetch weather data.");
  }
}
 
 form.addEventListener("submit", e => {

   e.preventDefault();

   const zip = zipInput.value.trim();

   if (!zip) {

      alert("please enter a Zip code");
      return;

   }

   console.log("fetching weather for zip", zip);

   

 })
