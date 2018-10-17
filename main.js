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
              document.getElementById("temp").innerHTML = res.main['temp'] + " °C";
              document.getElementById("location").innerHTML = res.name + ", GB ";
            })


      }

    )
  }

}