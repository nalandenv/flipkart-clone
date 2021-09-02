const login = document.querySelector("#login");
const popUpForm = document.querySelector("#popUpForm");
const formContainer = document.querySelector("#form-container");
login.addEventListener("click", () => {
  popUpForm.classList.remove("hidden");
});

popUpForm.addEventListener("click", (e) => {
  if (!formContainer.contains(e.target)) {
    popUpForm.classList.add("hidden");
  }
});
