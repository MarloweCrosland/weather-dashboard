

//capture the text input and apply to api url
const userButton = document.getElementById('search-btn');
var cityName = document.getElementById("form-input").value.trim();
//make submit button run the get weather function
userButton.addEventListener('click', getCurrentWeather);

function getCurrentWeather(cityName){
    //capture the text input and apply to api url
    var cityName = document.getElementById("form-input").value.trim();
    var apiUrl = (`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=8879e080263c5facc743b20b89e0c596`)
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
`<p>
City: ${cityName} <br> 
Date: //Date <br>
Temperature: ${data.main.temp} F <br>
Humidity: ${data.humidity} <br>
Wind speed: ${data.wind.speed} mph <br>
${data.weather.icon} <br>
UV: //UV VALUE
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
var newUrl = (`http://api.openweathermap.org/data/2.5/weather?q=${newTerm}&units=imperial&appid=8879e080263c5facc743b20b89e0c596`)
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