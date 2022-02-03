
console.log("IN SCRIPT!!!!")

var getLoc=document.getElementById('getBtn');

//var apiUrl='https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=3b55a267ab7fd7c8d9aeb4d81c487408'
var currLocation= document.getElementById('currWeather')
var today=document.getElementById('currWeathContainer')
var currDate = moment().format("MM-DD-YYYY")


function getWeather(e){
    e.preventDefault()
    //console.log("in weather function ")
    var citySearch= document.getElementById('location').value;
    console.log(citySearch)
    var apiUrl='https://api.openweathermap.org/data/2.5/weather?q=' + citySearch+ '&appid=3b55a267ab7fd7c8d9aeb4d81c487408'
   

    fetch(apiUrl)
    .then(function (res) {
        if(res.ok){
            console.log("res worked")
            res.json()
            .then(function (data) {
                console.log(data)
                displayWeather(data, citySearch);
                getCurrData(data, citySearch);
        });
        }
        else{
            console.log("res x worked")
        }
})
}

function displayWeather(data, citySearch){
    console.log("in display function")
    if (data=false){
        alert("Please enter a valid city")
    }

    else{
        currLocation.textContent=citySearch
        today.textContent='';
        console.log("curr is cleared")
        

    }
}

function getCurrData(data, citySearch){
    console.log("in the next function");
    var apiUrl2='https://api.openweathermap.org/data/2.5/weather?q=' + citySearch+ '&units=metric=3b55a267ab7fd7c8d9aeb4d81c487408'


    var cityName = data.name;
    today.append(cityName +": " + currDate );

    var todaysWeatherIcon = data.weather[0].icon;
    var weathEmoj = 'https://openweathermap.org/img/wn/' + todaysWeatherIcon + ".png";
    var getIcon = document.createElement('img')
    getIcon.setAttribute('src', weathEmoj);
    today.append(getIcon)
    

    var temp = data.main.temp;
    var fahrenheit = document.createElement('p');
    fahrenheit.textContent=("Temperature: " + temp + "°F")
    today.append(fahrenheit);
    

    var hum =data.main.humidity
    var humidity = document.createElement('p');
    humidity.textContent=("Humidity: " + hum + '%')
    today.append(humidity);
    

    var ws = data.wind.speed;
    var windSpeed = document.createElement('p');
    windSpeed.textContent=("Wind Speed: " + ws + " MPH")
    today.append(windSpeed);




    var UVindexEl = document.createElement('span');
    UVindexEl.textContent=("UV Index: ");
    var indexNumber = parseFloat(data.value)
    var indexNumEl = document.createElement('span');
    indexNumEl.textContent=(indexNumber);
    indexNumEl.setAttribute('id', 'index-number');
    

    

   
    
    today.append(UVindexEl);
    today.append(indexNumEl);

    getFiveDay();

                 

    
}

function getFiveDay(){
    console.log("In five day")
}


getLoc.addEventListener('click', getWeather);
