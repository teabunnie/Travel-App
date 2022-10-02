// load environmental variables to the server
const dotenv = require("dotenv");
dotenv.config();

const geoUsername = process.env.GEO_USER;
const weatherKey = process.env.WEATHERBIT_KEY;
const pixaKey = process.env.PIXABAY_KEY;

// Required
const fetch = require("node-fetch");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const app = express();
const bodyParser = require("body-parser");

// for API data to send to client
let projectData = {};

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
const json = require("./mockAPI.js");
app.use(cors());
app.use(express.static("dist"));

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

// for API data to send to client
let allData = [];

// Handlers:
//GEO Handler //
async function geoApi(city, country) {
  // console.log(city, country);
  let geoUrl = `http://api.geonames.org/searchJSON?name_equals=${city}&maxRows=20&username=${geoUsername}`;
  console.log(geoUrl);
  try {
    let response = await fetch(geoUrl);
    let geoData = await response.json();
    let countriesData = geoData.geonames;
    const correctCountry = countriesData.filter((countryData) => {
      return (
        countryData.countryName === country && countryData.toponymName === city
      );
    });
    if (correctCountry[0] === undefined) {
      console.log("this was undefined");
      return alert("enter a valid city and country");
    } else {
      // console.log(correctCountry[0]);
      // return await Promise.resolve({ city, country, geoUrl });
      let countryName = correctCountry[0].countryName;
      let cityName = correctCountry[0].toponymName;
      let placeType = correctCountry[0].fclName;
      let lng = correctCountry[0].lng;
      let lat = correctCountry[0].lat;
      allData.push(countryName, cityName, placeType);
      // console.log({ countryName, cityName, placeType, lng, lat });
      // console.log(allData);
      return { countryName, cityName, placeType, lng, lat };
    }
  } catch (error) {
    console.log("error", error);
  }
}

// Weather Handler
async function weatherApi(lng, lat) {
  const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&key=${weatherKey}&days=1`;
  console.log(weatherURL);
  try {
    const response = await fetch(weatherURL);
    const weatherData = await response.json();
    // console.log(weatherData);
    const lowTemp = weatherData.data[0].low_temp;
    const highTemp = weatherData.data[0].high_temp;
    const weatherSummary = weatherData.data[0].weather.description;
    // console.log(lowTemp, highTemp, weatherSummary);
    allData.push(lowTemp, highTemp, weatherSummary);
    console.log(allData);
  } catch (error) {
    console.log("error", error);
  }
}

// pixa handler
async function pixaApi(city) {
  const imgURL = `https://pixabay.com/api/?key=${pixaKey}&q=${city}&category=places&image_type=photo&per_page=3`;
  console.log(imgURL);
  try {
    const response = await fetch(imgURL);
    // console.log(response);
    const imgData = await response.json();
    allData.push(imgData.hits[0].webformatURL);
  } catch (error) {
    console.log("error", error);
  }
}

// Routes //
// testing
app.get("/", function (req, res) {
  res.send("hello");
  console.log("this got triggered");
});

// receive POST request from client, parse URL, create API URL, get GeoAPI --> weatherAPI --> pixaAPI then send back data to client as object
app.post("/api", (req, res) => {
  const { city, country, date } = req.body;
  console.log(city, country, date);
  geoApi(city, country).then((geoData) => {
    const lng = geoData.lng;
    const lat = geoData.lat;
    weatherApi(lng, lat).then(() => {
      pixaApi(city).then(() => {
        projectData = { allData };
        const sendData = projectData;
        allData = [];
        console.log(sendData);
        res.send(sendData);
      });
    });
  });
});
