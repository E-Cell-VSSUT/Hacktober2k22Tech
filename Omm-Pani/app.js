const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const appid = "c713782c5fafb9656ed329673c4b77f7";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    appid +
    "&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDesc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather curently is " + weatherDesc + "</p>");
      res.write(
        "<h1>The temperature in " + query + " is</h1>" + temp + "degree celsius"
      );
      res.write("<img src=" + imageUrl + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("server started on port 3000.");
});
