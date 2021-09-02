const login = document.querySelector("#login");
const popUpForm = document.querySelector("#popUpForm");
const formContainer = document.querySelector("#form-container");
login.addEventListener("click", () => {
  popUpForm.classList.remove("hidden");
});

popUpForm.addEventListener("click", (e) => {
  if (!formContainer.contains(e.target)) {
    popUpForm.classList.add("hidden");
    resetForm();
  }
});

// form alter
const signUp = document.querySelector("#sign-up-link");
const heading = document.querySelector(".left-sidebar h1");
const description = document.querySelector(".left-sidebar p");
const or = document.querySelector("#or");
const formElement = document.querySelectorAll(
  ".right-sidebar div .form-element"
);
const loginBtn = document.querySelector("#login-btn");
const otpBtn = document.querySelector("#otp-btn");
const signInBtn = document.querySelector("#sign-in-btn");
signUp.addEventListener("click", (e) => {
  e.preventDefault();
  or.classList.add("hidden");
  heading.innerText = "Looks like you're new here!";
  description.innerText = "Sign up with your mobile number to get started";
  formElement[1].classList.add("hidden");
  formElement[0].childNodes[3].innerText = "Enter Mobile Number";
  loginBtn.innerText = "CONTINUE";
  otpBtn.classList.add("hidden");
  signUp.classList.add("hidden");
  signInBtn.classList.remove("hidden");
});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetForm();
});
const resetForm = () => {
  or.classList.remove("hidden");
  heading.innerText = "Login";
  description.innerText =
    "Get access to your Orders, Wishlist and Recommendations";
  formElement[1].classList.remove("hidden");
  formElement[0].childNodes[3].innerText = "Enter Email/Phone Number";
  loginBtn.innerText = "Login";
  otpBtn.classList.remove("hidden");
  signUp.classList.remove("hidden");
  signInBtn.classList.add("hidden");
};
