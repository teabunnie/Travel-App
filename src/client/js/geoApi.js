// import { geoApi } from "./geoApi";

// do not uncommet above

// async function geoApi(city, country) {
//   // console.log(city, country);
//   const geoUsername = "teabunnie1016";
//   let geoUrl = `http://api.geonames.org/searchJSON?name_equals=${city}&maxRows=20&username=${geoUsername}`;
//   try {
//     let response = await fetch(geoUrl);
//     let geoData = await response.json();
//     let countriesData = geoData.geonames;
//     const correctCountry = countriesData.filter((countryData) => {
//       return (
//         countryData.countryName === country && countryData.toponymName === city
//       );
//     });
//     if (correctCountry[0] === undefined) {
//       console.log("this was undefined");
//       return alert("enter a valid city and country");
//     } else {
//       console.log(correctCountry[0]);
//       // return await Promise.resolve({ city, country, geoUrl });
//       let countryName = correctCountry[0].countryName;
//       let cityName = correctCountry[0].toponymName;
//       let placeType = correctCountry[0].fclName;
//       let lng = correctCountry[0].lng;
//       let lat = correctCountry[0].lat;
//       //   allData.push(countryName, cityName, placeType);
//       return { countryName, cityName, placeType, lng, lat };
//     }
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// export { geoApi };
