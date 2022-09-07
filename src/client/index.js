import { checkURL } from "./js/nameChecker";
import { formHandler } from "./js/formHandler";
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

// console.log(checkForName);

//Run the formHandler function
window.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", formHandler);
});
