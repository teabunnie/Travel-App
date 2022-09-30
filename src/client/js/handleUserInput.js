// import { handleUserInput } from "./handleUserInput";

function handleUserInput(city, country, date, endDate) {
  function upperCase(word) {
    if (word == false) {
      return false;
    } else {
      return word
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
    }
  }
  const handledCity = upperCase(city);
  const handledCountry = upperCase(country);
  const handledDate = date;
  const checkDate = new Date(handledDate);
  const todayDate = new Date();
  const departDate = new Date(date);
  const handledEndDate = new Date(endDate);
  const handledDurationDate = Math.round(
    ((departDate.getTime() - handledEndDate.getTime()) / (1000 * 3600 * 24)) *
      -1
  );
  const handledDaysLeft = Math.round(
    ((todayDate.getTime() - departDate.getTime()) / (1000 * 3600 * 24)) * -1
  );
  console.log(handledDurationDate);
  if (
    handledCity == false ||
    checkDate == "Invalid Date" ||
    handledEndDate == "Invalid Date" ||
    handledEndDate < departDate
  ) {
    alert(
      "Form cannot be blank, or Enter a valid date format, or start date cannot be after departure date!"
    );
    return false;
  } else {
    return {
      handledCity,
      handledCountry,
      handledDate,
      handledDaysLeft,
      handledDurationDate,
    };
  }
}

export { handleUserInput };
// // Post function with headers
// const post = async (path, userURL = {}) => {
//   const response = await fetch(path, {
//     method: "POST",
//     credentials: "same-origin",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(userURL),
//   });
//   try {
//     return await response.json();
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// function formHandler(event) {
//   event.preventDefault();
//   const url = document.getElementById("userInput").value;
//   // Check if URL is valid
//   if (checkURL(url)) {
//     // call local server with POST data of URL
//     post("http://localhost:8080/api", { userURL: url }).then((data) => {
//       console.log(data);
//       //Received data back from NLP API
//       // let results = { agreement, confidence, irony, score, text };
//       // change elements on html document
//       document.getElementById(
//         "text"
//       ).innerHTML = `Text: ${data.sentence_list[1].text}`;
//       document.getElementById(
//         "agreement"
//       ).innerHTML = `Agreement: ${data.agreement}`;
//       document.getElementById(
//         "confidence"
//       ).innerHTML = `Confidence: ${data.confidence}`;
//       document.getElementById(
//         "subjectivity"
//       ).innerHTML = `Subjectivity: ${data.subjectivity}`;
//       document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
//       document.getElementById(
//         "score"
//       ).innerHTML = `Score(P = Positive | N = Negative): ${data.score_tag}`;
//     });
//   } else {
//     alert("enter a valid URL");
//   }
// }

// export { formHandler };
// export { post };
