import { handleUserInput } from "../src/client/js/handleUserInput.js";

test("valid user input data", () => {
  expect(
    handleUserInput("san Francisco", "united States", "10/05/22", "10/10/22")
  ).toEqual({
    handledCity: "San Francisco",
    handledCountry: "United States",
    handledDate: "10/05/22",
    handledDaysLeft: 3,
    handledDurationDate: 5,
  });
});
