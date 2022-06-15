var token = '8879e080263c5facc743b20b89e0c596';

//capture the text input and apply to api url
const userButton = document.getElementById('search-btn');
var cityName = document.getElementById("form-input").value;
//make submit button run the get weather function
userButton.addEventListener('click', getCurrentWeather);
userButton.addEventListener('click', getGeoInfo);


function getGeoInfo(){
  //gets geo code from city name
  var cityName = document.getElementById("form-input").value;
  var geoUrl = (`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${token}`);
  fetch(geoUrl)
  .then(function(response) {
  response.json().then(function(data){
    console.log(data[0]);
//set lat and lon to variables
    var a = data[0].lat
    var b = data[0].lon
///getting forecast info with geocode
  var forecastUrl = (`https://api.openweathermap.org/data/2.5/forecast?lat=${a}&lon=${b}&units=imperial&appid=${token}`);
  fetch(forecastUrl)
  .then(function(response){
  response.json().then(function(data){
  console.log(data.list)
//create boxes for the info to live in


};
})
})
})
})
};








function getCurrentWeather(cityName){
    //capture the text input and apply to api url
    var cityName = document.getElementById("form-input").value.trim();
    var apiUrl = (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${token}`)
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
// html for the results box
resultsBox.innerHTML = 
//name, date, icon, temp, humidity, wind, icon, uv
//UV: UV VALUE NO LONGER AVAILIBLE FOR FREE WITH THIS API
`<p>
City: ${cityName} <br> 
Date: ${data.dt} unix <br>
Temperature: ${data.main.temp} F <br>
Humidity: ${data.humidity} <br>
Wind speed: ${data.wind.speed} mph <br>
UV:
${data.weather.icon} <br>

</p>`
};


//event listener for search button runs addListItem
  const button = document.getElementById('search-btn');
  button.addEventListener('click', addListItem);

////////create list item with previously searched city name
 function addListItem(cityName){
   event.preventDefault();
  var cityName = document.getElementById("form-input").value;
  var list = document.getElementById('suggested-cities');
  var newListItem = document.createElement('li');
  newListItem.className= "city-example";
  newListItem.textContent = cityName.trim();
  newListItem.addEventListener('click',searchThis);
  list.appendChild(newListItem);
 

};

/////////make list items click-to-searchable
var listItems = document.getElementById('suggested-cities');
var listItem = document.querySelectorAll('.city-example');


function searchThis(){
var newTerm = this.textContent;
console.log(newTerm);
//create search with newTerm
var newUrl = (`https://api.openweathermap.org/data/2.5/weather?q=${newTerm}&units=imperial&appid=${token}`)
fetch(newUrl)
.then(function(response) {
  // request was successful
  if (response.ok) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
      displayWeather(data, newTerm);
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


