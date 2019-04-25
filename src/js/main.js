const formButton = document.querySelector("#formBtn");
const messageForm = document.querySelector("#messageForm");
const successMsg = document.querySelector("#submitSuccess");

let formIsHidden = false;

formButton.addEventListener("click", () => {
  messageForm.classList.toggle("hidden");
  successMsg.classList.toggle("hidden");

  formIsHidden = !formIsHidden;
  if (formIsHidden) {
    formButton.innerText = "new message";
  } else {
    formButton.innerText = " submit";
  }
});
