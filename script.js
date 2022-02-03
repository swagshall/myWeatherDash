
console.log("IN SCRIPT!!!!")

var getLoc=document.getElementById('location-form');
// var apiUrl='https://api.openweathermap.org/data/2.5/weather?q=' + {citySearch}+ '&units=metric=3b55a267ab7fd7c8d9aeb4d81c487408'
var citySearch= document.getElementsByClassName('form-input').textContent;
var apiUrl='https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=3b55a267ab7fd7c8d9aeb4d81c487408'
var currLocation= document.getElementById('currWeather')
var today=document.getElementById('currWeathContainer')



function getWeather(e, citySearch){
    e.preventDefault()
    console.log("in weather function ")

    fetch(apiUrl)
    .then(function (res) {
        if(res.ok){
            console.log("res worked")
            res.json()
            .then(function (data) {
                console.log(data)
                displayWeather(data, citySearch);
                getCurrData(res, citySearch);
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

function getCurrData(res, citySearch){
    console.log("in the next function");

    var cityName = res.name;
    var temp = res.temp;
    //var windSpeed = res.wind.speed;
    
    //cr8 tags for info
    var fahrenheit = document.createElement('p');
    var humidity = document.createElement('p');
    //var impWindSpeed = document.createElement('p');
    var UVindexEl = document.createElement('span');
    UVindexEl.text("UV Index: ");
    var indexNumber = parseFloat(res.value)
    var indexNumEl = document.createElement('span');
    indexNumEl.textContent(indexNumber);
    indexNumEl.attr('id', 'index-number');

                 

    
}


getLoc.addEventListener('click', getWeather);
//console.log(apiUrl)