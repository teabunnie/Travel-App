function formDeleter(event) {
  event.preventDefault();
  document.getElementById("userForm").reset();
  // var tmp = document.getElementById("tmp_text").innerHTML;

  document.getElementById("temp_text").innerHTML = `
  <p class="travel" id="departCountry">My trip to:</p>
  <p class="travel" id="departTime">Departing:</p>

  <div class="picture" id="picture"></div>
  <p class="travel" id="timeToDepart">
    Days left before vacation time!...
  </p>
  <p class="travel" id="tripLength">Your trip duration is...</p>
  <p class="weather">Typical weather for then is...</p>
  <p class="weather" id="weatherData">High and low temps of...</p>
  <p class="weather" id="weatherSummary">Weather will be like...</p>`;
}
export { formDeleter };
