const dotenv = require("dotenv");
dotenv.config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const app = express();
const bodyParser = require("body-parser");

/* Middleware*/

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
const json = require("./mockAPI.js");
app.use(cors());
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile("index.html", { root: "dist" });
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
  console.log("this got triggered");
});

/* create URL for API call */
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apiKey = process.env.API_KEY;
const jsonSelector = "&of=json&url=";
const lang = "&lang=en";

// function for API call to meaningcloud with URL
const getAPIData = async (apiURL) => {
  const res = await fetch(apiURL);
  try {
    const data = await res.json();
    console.log("waiting for API data");
    // console.log(data);
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
};

// receive POST request from client, parse URL, create API URL, send back data to client
app.post("/api", (req, res) => {
  // console.log(req.body.userURL);
  const url = req.body.userURL;
  let apiURL = baseURL + apiKey + jsonSelector + url + lang;
  // console.log(apiURL);
  getAPIData(apiURL).then((data) => {
    apiData = data;
    res.send(apiData);
  });
});
