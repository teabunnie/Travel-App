// import { formHandler } from "./formHandler";
import { handleUserInput } from "./handleUserInput";
import { geoApi } from "./geoApi";
import { weatherApi } from "./weatherApi";

const postData = async (path, userData) => {
  const response = await fetch(path, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};

function formHandler(event) {
  event.preventDefault();
  // const geoUsername = "teabunnie1016";
  // const weatherKey = "28905dbcca9d43c786d304a2b766d571";
  // let allData = [];
  // console.log("hello");
  const country = document.getElementById("countryInput").value;
  const city = document.getElementById("cityInput").value;
  const date = document.getElementById("departDateInput").value;
  const endDate = document.getElementById("endDateInput").value;
  // check if user input data is valid, if not alert
  if (handleUserInput(city, country, date, endDate) === false) {
    return;
  } else {
    // handle data and send POST to server
    console.log(handleUserInput(city, country, date, endDate));
    const {
      handledCity,
      handledCountry,
      handledDate,
      handledDaysLeft,
      handledDurationDate,
    } = handleUserInput(city, country, date, endDate);
    let userData = {
      city: handledCity,
      country: handledCountry,
      date: handledDate,
      daysLeft: handledDaysLeft,
      duration: handledDurationDate,
    };
    console.log(userData);
    postData("http://localhost:8080/api", userData).then((data) => {
      // print API data received from server to client
      console.log(data.allData);
      const apiCountry = data.allData[0];
      const apiCity = data.allData[1];
      const apiLowTemp = data.allData[3];
      const apiHighTemp = data.allData[4];
      const apiWeatherSummary = data.allData[5];
      const apiPicture = data.allData[6];
      const apiDaysLeft = userData.daysLeft;
      const apiduration = userData.duration;

      // insert picture
      document.getElementById("picture").innerHTML = "";
      let insert_img = document.createElement("img");
      insert_img.src = apiPicture;
      document.querySelector(".picture").appendChild(insert_img);

      // insert trip data ( duration + weather )
      document.getElementById(
        "departCountry"
      ).innerHTML = `My trip to: ${apiCountry}, ${apiCity}`;
      document.getElementById(
        "departTime"
      ).innerHTML = `Departing: ${handledDate}`;
      document.getElementById(
        "weatherData"
      ).innerHTML = `Temperature is in the high ${apiHighTemp}'s, and low ${apiLowTemp}'s`;
      document.getElementById(
        "weatherSummary"
      ).innerHTML = `That day will be: ${apiWeatherSummary}`;
      document.getElementById(
        "timeToDepart"
      ).innerHTML = `Days left before vacation time!: ${apiDaysLeft}`;
      document.getElementById(
        "tripLength"
      ).innerHTML = `Your trip duration is ${apiduration} days.`;
    });
  }
}
export { formHandler };
