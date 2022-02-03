
console.log("IN SCRIPT!!!!")

var getLoc=document.getElementById('location-form');
// var apiUrl='https://api.openweathermap.org/data/2.5/weather?q=' +cityName+ '&appid=3b55a267ab7fd7c8d9aeb4d81c487408'
var cityName= document.getElementById('location')
var apiUrl='https://api.openweathermap.org/data/2.5/weather?q=Miami&appid=3b55a267ab7fd7c8d9aeb4d81c487408'


function getWeather(e, cityName){
    e.preventDefault()
    console.log("in weather function ")

    fetch(apiUrl)
    .then(function (res) {
        if(res.ok){
            console.log("res worked")
            res.json()
            .then(function (data) {
                console.log(data)
                displayWeather(data, cityName)
        });
        }
        else{
            console.log("res x worked")
        }
})
}

function displayWeather(data, cityName){
    console.log("in display function")
}




getLoc.addEventListener('click', getWeather);
console.log(apiUrl)