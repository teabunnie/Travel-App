// import { checkURL } from "./js/nameChecker";
// import { formHandler } from "./js/formHandler";
// import "./styles/resets.scss";
// import "./styles/base.scss";
// import "./styles/footer.scss";
// import "./styles/form.scss";
// import "./styles/header.scss";
import { formHandler } from "./js/formHandler";
import { formDeleter } from "./js/formDeleter";
import "./styles/styles.scss";

// Submit form
window.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", formHandler);
});

// Delete form
window.addEventListener("DOMContentLoaded", () => {
  const deletethis = document.getElementById("delete");
  deletethis.addEventListener("click", formDeleter);
});
