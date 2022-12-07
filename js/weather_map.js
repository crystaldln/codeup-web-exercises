$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    q:     "San Antonio, US"
}).done(function(data) {
    console.log(data);
});

$.get("http://api.openweathermap.org/data/2.5/weather?APPID=" + OPEN_WEATHER_APPID + "&q=San+Antonio,+US");
mapboxgl.accessToken = MAPBOX_APPID;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});




