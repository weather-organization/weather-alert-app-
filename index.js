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


// get the data API
// const weatherAlrtApiUrl ="/current.json or /current.xml";

// fetch (weatherAlrtApiUrl)
// .then ((response)=>{
//    if(!response.ok){
//       alert("Error occured in the internet")
//    }
//    return response.json() // data will convert as string 
//    alert("you have successful")
// })
// .then ((data)=>{
//   console.log(data) 
// })
// .catch((error)=>{
//    alert("error occured")
// })
const weatherAlrtApiUrl ="https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London";
function fetchApiUrl (){
   return axios.get(weatherAlrtApiUrl)
   .then ((response)=>{
     console.log (response.data);

   })
   .catch ((error)=>{
    console.log ("Error occurs:" );    
   })
}
fetchApiUrl();





