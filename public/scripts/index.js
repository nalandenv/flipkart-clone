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
    }
  }
});
// auto generate list
const products = {
  "Fashion":["Men's Top Wear", "Men's Bottom Wear", "Women's Ethinic", "Women Western", "Men Footwear", "Women Footwear", "Watches and Accessories", "Bags, Suitcases & Luggage", "Kids", "Essentials", "Winter"],
  "Electronics":["Audio", "Cameras & Accessories", "Computer Peripherals"],
  "Home":["Audio", "Cameras & Accessories", "Computer Peripherals"],
  "Appliances":["Audio", "Cameras & Accessories", "Computer Peripherals"],
  "Beauty, Toys & More":["Audio", "Cameras & Accessories", "Computer Peripherals"]
};
const fashion = {
  "Men's Top Wear": [
    "All",
    "Men's T-shirts",
    "Men's Casual Shirts",
    "Men's Formal Shirts","Men's Kurtas","Men's Ethnic Sets", "Men's Blazers", "Men's Raincoat", "Men's Windcheaters", "Men's Suit", "Men's Fabrics"
  ],
  "Men's Bottom Wear": [
    "All",
    "Men's Jeans",
    "Men's Trackpants",
    "Men's Trousers",
  ],
  "Women's Ethinic": ["All", "Women Sarees", "Women Kurtas & Kurtis"],
};
const electronics = {
  "Audio": [
    "All",
    "Bluetooth Headphones",
    "Men's Casual Shirts",
    "Men's Formal Shirts","Men's Kurtas","Men's Ethnic Sets", "Men's Blazers", "Men's Raincoat", "Men's Windcheaters", "Men's Suit", "Men's Fabrics"
  ],
  "Cameras & Accessories": [
    "All",
    "Men's Jeans",
    "Men's Trackpants",
    "Men's Trousers",
  ],
  "Computer Peripherals": ["All", "Women Sarees", "Women Kurtas & Kurtis"],
};

const cat = document.querySelectorAll(".category");
  for(let x of cat){
    x.addEventListener("mouseover", ()=>{
      const productKey = x.childNodes[3].childNodes[1].innerText;
      const ul = document.createElement("ul");
      const catDiv = x.childNodes[5].childNodes[3].childNodes[1];
      catDiv.innerHTML = "";
      products[productKey].forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${element}</span>`;
        ul.append(li);
      });
      catDiv.append(ul);
      switch(productKey){
        case "Fashion":
          arr = fashion;
          break;
          case "Electronics":
            arr= electronics;
            break;
      }
      const men = document.querySelectorAll(".cat ul li span");
      for (let i of men) {
        i.addEventListener("mouseover", () => {
          const subCat = x.childNodes[5].childNodes[3].childNodes[3];
          subCat.innerHTML = "";
          const ul = document.createElement("ul");
          const h4 = document.createElement("h4");
          const key = i.childNodes[0].nodeValue;
          h4.innerText = `MORE IN ${key.toUpperCase()}`;
          subCat.append(h4);
          for (let j of arr[key]) {
            const li = document.createElement("li");
            li.innerText = j;
            ul.append(li);
          }
          subCat.append(ul);
        });
      }

    })
  }



// subcat
// const fash = document.querySelector("#fashion");
//       const men = document.querySelectorAll(".cat ul li span");
//       for (let i of men) {
//         i.addEventListener("mouseover", () => {
//           console.log()
//           const subCat = document.querySelector(".sub-cat");
//           subCat.innerHTML = "";
//           const ul = document.createElement("ul");
//           const h4 = document.createElement("h4");
//           const key = i.childNodes[0].nodeValue;
//           h4.innerText = `MORE IN ${key.toUpperCase()}`;
//           subCat.append(h4);
//           for (let j of fashion[key]) {
//             const li = document.createElement("li");
//             li.innerText = j;
//             ul.append(li);
//           }
//           subCat.append(ul);
//         });
//       }