


const conditionValues = document.querySelectorAll(".condition-value");
function formatTemperature(temp) {
  return `${Math.round(temp)}°F`;
}
function formatHumidity(humidity) {
  return `${humidity}%`;
}
function formatWindSpeed(wind) {
  return `${wind} mph`;
}

function renderCurrentConditions(data) {
  const { temperature, humidity, windSpeed } = data;

  conditionValues[0].textContent = formatTemperature(temperature);
  conditionValues[1].textContent = formatHumidity(humidity);
  conditionValues[2].textContent = formatWindSpeed(windSpeed);
};

const currentConditionsData = {
  temperature: weatherData.currentConditions.temperature.value,
  humidity: weatherData.currentConditions.humidity.value,
  windSpeed: weatherData.currentConditions.windSpeed.value
};

renderCurrentConditions(currentConditionsData);

console.log("Current conditions rendered:", currentConditionsData);



const WeatherData = {
     Curentconditions : {
       tempareture: {value: 72,  unit: "°F", label: "Temperature"},
       Humidity: {value: 45, unit: "%", label: "Humidity"},
       WindSpeed: { value: 12, label: "Wind Speed"}

   },

alerts: [
   {
      severityClass: "severa",
      title: "severa Thunderstorm warning",
      location: "Denvar CO",
      description: "large hail and damaging winds expected. Seek shelter immedieatly.",
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

function createAlertCard(alert){
   const article = document.createElement("article")
   article.className = `alert-card ${alert.severityClass}`

   article.innerHTML = `
   <div class="alert-left">
     <div class="alert-top">
      <span class="warn-icon"></span>
      <div>
        <h3>${alert.title}</h3>
        <div class="sub">${alert.location}</div>
        </div>
        </div>
        
        <p>${alert.description}</p>
        
        <div class="chips">
         ${alert.chips.map((c) => `<span class="chips">${c}</span>`).join("")}
         </div>
         </div>
         
         <div class="alert-right">
          <span class="time-pill">${alert.timeRemaining}</span>
          </div>`

          return article      
}

function renderAlerts(alerts){
   const list = document.querySelector("#active-alert .alerts-list")
   if(!list)return

   list.innerHTML = ""

   if(alert.length === 0){
      list.innerHTML = `<div class="all-clear">All Clear</div>`
       return
   }
   alerts.forEach((alert) => list.appendChild(createAlertCard(alert)))
}

renderAlerts(WeatherData.alerts)
=======

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
