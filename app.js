const express = require("express");

const https = require("https");

const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){

  const query = req.body.cityName;

  const apikey = process.env.API_KEY;

  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query + "&appid=" + apikey;

  https.get(url, function(response){
    response.on("data", function(data){
      const WeatherData = JSON.parse(data);

      const temp = WeatherData.main.temp;

      const WeatherDescription = WeatherData.weather[0].description

      const weatherIcon = WeatherData.weather[0].icon;

      const iconurl = "http://openweathermap.org/img/wn/" + weatherIcon +"@2x.png";


      res.write("<h1>" +WeatherDescription + "</h1>");

      res.write("<h1>The Temperature in " + query + " is " + temp + " Kelvin</h1>");

      res.write("<img source = " + iconurl + ">");

      res.send();
    });

  });

});
app.listen(3000, function(){
  console.log("server is running on port 3000");
});
