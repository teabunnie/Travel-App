import { checkURL } from "./nameChecker";

// Post function with headers
const post = async (path, userURL = {}) => {
  const response = await fetch(path, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userURL),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};

function formHandler(event) {
  event.preventDefault();
  const url = document.getElementById("userInput").value;
  // Check if URL is valid
  if (checkURL(url)) {
    // call local server with POST data of URL
    post("http://localhost:8080/api", { userURL: url }).then((data) => {
      console.log(data);
      //Received data back from NLP API
      let results = { agreement, confidence, irony, score, text };
      // change elements on html document
      document.getElementById(
        "text"
      ).innerHTML = `Text: ${data.sentence_list[1].text}`;
      document.getElementById(
        "agreement"
      ).innerHTML = `Agreement: ${data.agreement}`;
      document.getElementById(
        "confidence"
      ).innerHTML = `Confidence: ${data.confidence}`;
      document.getElementById("irony").innerHTML = `Rrony: ${data.irony}`;
      document.getElementById("score").innerHTML = `Score: ${data.score_tag}`;
    });
  } else {
    alert("enter a valid URL");
  }
}

export { formHandler };
