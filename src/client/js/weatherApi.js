// import { weatherApi } from "./weatherApi";
// do not uncomment above

// async function weatherApi(lng, lat) {
//   const weatherKey = "28905dbcca9d43c786d304a2b766d571";
//   const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&key=${weatherKey}&days=1`;
//   console.log(weatherURL);
//   try {
//     const response = await fetch(weatherURL);
//     const weatherData = await response.json();
//     // console.log(weatherData);
//     const lowTemp = weatherData.data[0].low_temp;
//     const highTemp = weatherData.data[0].high_temp;
//     const weatherSummary = weatherData.data[0].weather.description;
//     console.log(lowTemp, highTemp, weatherSummary);
//     // allData.push(lowTemp, highTemp, weatherSummary);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// export { weatherApi };
