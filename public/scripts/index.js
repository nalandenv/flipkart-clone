const login = document.querySelector("#login button");
const popUpForm = document.querySelector("#popUpForm");
const formContainer = document.querySelector("#form-container");
const signUpRedirect = document.querySelector(".sign-up-redirect");
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
const loginError = document.querySelector("#login-error");

login.addEventListener("click", (e) => {
  e.preventDefault();
  popUpForm.classList.remove("hidden");
});
signUpRedirect.addEventListener("click", (e) => {
  e.preventDefault();
  popUpForm.classList.remove("hidden");
  signUpRender();
});
popUpForm.addEventListener("click", (e) => {
  if (!formContainer.contains(e.target)) {
    popUpForm.classList.add("hidden");
    resetForm();
  }
});

signUp.addEventListener("click", (e) => {
  e.preventDefault();
  signUpRender();
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
  formElement[0].childNodes[1].type = "text";
  loginBtn.innerText = "Login";
  otpBtn.classList.remove("hidden");
  signUp.classList.remove("hidden");
  signInBtn.classList.add("hidden");
  loginError.innerText = "";
};

const signUpRender = () => {
  or.classList.add("hidden");
  heading.innerText = "Looks like you're new here!";
  description.innerText = "Sign up with your mobile number to get started";
  formElement[1].classList.add("hidden");
  formElement[0].childNodes[3].innerText = "Enter Mobile Number";
  formElement[0].childNodes[1].type = "number";
  loginBtn.innerText = "CONTINUE";
  otpBtn.classList.add("hidden");
  signUp.classList.add("hidden");
  signInBtn.classList.remove("hidden");
};

// form validation
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  loginError.innerText = "";
  if (username.value == "" || password.value == "") {
    if (formElement[1].classList.contains("hidden") && password.value == "") {
      loginError.innerText = "Please enter valid Mobile number";
    } else {
      loginError.innerText = "Please enter valid Email ID/Mobile number";
      console.log("signup");
    }
  }
});
