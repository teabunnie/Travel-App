import { formHandler } from "../src/client/js/formHandler.js";

// allow fetch calls on mock JEST
// https://www.npmjs.com/package/jest-fetch-mock
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import fetchMock from "jest-fetch-mock";
const mockAPIResponse = require("../src/server/mockAPI.js");

// This is required to allow fetch to work
//https://www.npmjs.com/package/whatwg-fetch
beforeAll(() => {
  require("whatwg-fetch");
});

//Jest tests for handleSubmit function
// test express connection when listening
describe("Test suit for handleSubmit function", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  test("testing formhandler function", () => {
    expect(formHandler).toBeDefined();
  });
  test("URL request is successful using MockAPI.js", () => {
    const expected = {
      title: "test json response",
      message: "this is a message",
      time: "now",
    };
    expect(mockAPIResponse).toMatchObject(expected);
  });
});
