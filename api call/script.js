$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=mumbai&units=imperial&appid=aa0f127bfd53eacc0af1f2d30616a6d1",function(data){
console.log(data);

var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp = Math.floor(data.main.temp);
var weather = data.weather[0].main;
$('.icon').attr('src', icon);
$(".weather").append(weather);
$(".temp").append(temp);


});
