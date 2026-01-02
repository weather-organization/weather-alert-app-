const WeatherData = {
   CurentConditions : {
     temperature: {value: 72,  unit: "°F", label: "Temperature"},
     humidity: {value: 45, unit: "%", label: "Humidity"},
     windSpeed: { value: 12, unit: "mph", label: "Wind Speed"}

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