window.onload = function () {
  // Check for geoloaction
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = "lat=" + position.coords.latitude;
        var lon = "lon=" + position.coords.longitude;
        var src = 'https://fcc-weather-api.glitch.me/api/current?';
        url = src + lat + "&" + lon;
        console.log(url);

        // call the API
        fetch(url)
          .then(data => {
            return data.json()
          })
          .then(
            (res) => {
              console.log(res)
              document.getElementById("temp").innerHTML = res.main.temp;
              document.getElementById("location").innerHTML = res.name + ", " + res.sys.country;
              document.getElementById("weather").innerHTML = res.weather[0].main;
              document.getElementById("img").src = res.weather[0].icon;
              
            })


      }

    )
  }

}
document.getElementById("unit").innerHTML = " °C";
var unit = document.getElementById("unit").innerHTML;

function convertUnit(){
  if (unit == " °C") {
  
  document.getElementById("unit").innerHTML = " °F";
  unit = " °F";

} else if (unit == " °F"){
  document.getElementById("unit").innerHTML = " °C";
  unit = " °C";
}}