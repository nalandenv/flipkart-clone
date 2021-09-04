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
const fashion = {
  "Men's Top Wear": ["All","Men's T-shirts","Men's Casual Shirts","Men's Formal Shirts","Men's Kurtas","Men's Ethnic Sets", "Men's Blazers", "Men's Raincoat", "Men's Windcheaters", "Men's Suit", "Men's Fabrics"],
  "Men's Bottom Wear": ["All","Men's Jeans","Men's Trousers","Men's Trackpants", "Men's Shorts", "Men's Cargos", "Men's Threefourths", "Men's Pyjamas & Loungepants", "Men's Dhoti", "Men's Ethnic Pyjama"],
  "Women Ethnic": ["All", "Women Sarees", "Women Kurtas & Kurtis","Women Kurta Sets & Salwar Suits", "Ethnic Dresses", "Women Dress Material", "Women Gowns", "Women Lehenga Cholis", "Women Leggings & Patialas", "Women Palazzons & Shararas", "Women Blouse", "Women Dupatta"],
  "Women Western": ["All", "Women Tops", "Women Dresses", "Women T-shirts & Polo T-shirts", "Women Jeans", "Women Nighties & Night Dresses", "Women Nightsuit", "Women Track Pants", "Women Trousers", "Women  Jumpsuits", "Women Shapewear", "Women Sports Bra"],
  "Men Footwear": ["All", "Men's Sports Shoes", "Men's Casual Shoes", "Men's Sandals & Floaters", "Men's Slippers & Flip Flops", "Men's Formal Shoes", "Men's Ethnic Shoes", "Active Footwear", "Combo Footwear", "Shoe Care"],
  "Women Footwear": ["All", "Women Flats", "Women Heels", "Women Wedges", "Women Slipper Flip Flops", "Women Casual Shoes", "Women Sports Shoes", "Wome Ballerinas", "Women Ethnic Shoes", "Women Sneakers", "Women Walking Shoes", "Women Boots"],
  "Watches and Accessories": ["Men & Women Watches", "Men & Women Sunglasses", "Wallets", "Men & Women Belts", "Women Fashion Jewellery", "Men Fashion Jewellery", "Precious Jewellery", "Precious Coins & Bars", "Precious Articles", "Frames & Contact Lenses", "Kids Accessories"],
  "Bags, Suitcases & Luggage": ["All", "Backpacks", "Suitcases & Trolleys", "Dufflebags", "Rucksacks", "Handbags", "Slingbags", "Women's Clutches & Wallets", "Messenger Bags", "Travel Accessories"],
  "Kids": ["All", "Girls Dresses", "Boys & Girls Tshirts", "Boys & Girls Combosets", "Boys & Girls Ethnic Wear", "Boys & Girls Jeans", "Boys & Girls Shorts", "Boys & Girls Trackpants", "Boys & Girls Innerwear", "Infant Wear", "Kids Slipper Flip Flops", "Kids Sports Shoes"],
  "Essentials": ["Men's Briefs & Trunks", "Men's Vests", "Men's Boxers", "Women Lingerie Sets", "Women Bra", "Women Panty", "Women Sarees", "Women Kurtas", "Women Kurta Sets & Salwar Suits", "Boys Innerwear", "Girls Innerwear", "Women Slipper Flip Flops"],
  "Winter": ["All", "Men's Jackets", "Men's Sweatshirts", "Men's Sweaters", "Men's Thermals", "Women's Jackets", "Women's Sweatshirts", "Women's Sweaters & Cardigans", "Womne's Shrugs", "Kids SweatShirts", "Women Kurtas", "Kids Jackets"]
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

const cat = document.querySelectorAll(".cat-list");
  for(let x of cat){
    x.addEventListener("mouseover", ()=>{
      const productKey = x.childNodes[3].childNodes[1].innerText;
      // const ul = document.createElement("ul");
      // const catDiv = x.childNodes[5].childNodes[3].childNodes[1];
      // catDiv.innerHTML = "";
      // products[productKey].forEach(element => {
      //   const li = document.createElement("li");
      //   li.innerHTML = `<span>${element}</span>`;
      //   li.classList.add("hover");
      //   ul.append(li);
      // });
      // catDiv.append(ul);
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
          h4.classList.add("sub-cat-heading");
          subCat.append(h4);
          for (let j of arr[key]) {
            const li = document.createElement("li");
            li.innerText = j;
            li.classList.add("hover");
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
