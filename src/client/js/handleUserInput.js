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
      handledDurationDate,
    };
  }
}

export { handleUserInput };
