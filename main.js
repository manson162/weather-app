const url='https://fcc-weather-api.glitch.me/api/current?lat=53.393645&lon=-2.2764119';

fetch(url)
.then(data=>{return data.json()})
.then(
  (res) =>
  {
    console.log(res)
    document.getElementById("temp").innerHTML = res.main['temp'] + " °C";
    document.getElementById("location").innerHTML = res.name + ", GB ";
  })