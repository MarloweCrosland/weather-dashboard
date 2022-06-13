//To-do list

//searchCity()

//displayWeather()
//name, date, icon, temp, humidity, wind, uv
//uv index change color

//displayForecast()
//5-day forecast date, icon, temp, wind, humididty

//addHistory()
//add search function to history items when clicked

//capture the text input and apply to api url
const userForm = document.getElementById('form');

userForm.addEventListener('submit', getCurrentWeather);

var cityName = document.getElementById("form-input").value.trim();

    
function getCurrentWeather(cityName){
    //capture the text input and apply to api url
    var cityName = document.getElementById("form-input").value.trim();
    
    var apiUrl = (`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8879e080263c5facc743b20b89e0c596`)
    fetch(apiUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          displayWeather(data, cityName);
        });
      } else {
        alert('Error: city not found');
      }
    })
    .catch(function(error) {
      alert('Unable to connect to server');
    });
event.preventDefault();

};


function displayWeather(data, cityName){
resultsBox = document.getElementById('results-box');
// html for the box
resultsBox.innerHTML = 
`City: ${cityName} <br> 
Date: //Date <br>
Temperature: ${data.main.temp} <br>
Humidity: ${data.humidity} <br>
Wind speed: ${data.wind.speed} <br>
${data.weather.icon} <br>
UV: //UV VALUE
`
};

//name, date, icon, temp, humidity, wind, uv

