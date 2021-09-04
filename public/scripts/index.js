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
  "Audio": ["All", "Bluetooth Headphones", "Wired Headphones", "True Wireless Earbuds", "Bluetooth Speakers", "Soundbars", "Home Theatres", "TV Streaming Device", "Remote Control", "DTH Set top box", "Headphones Pouch & Case Covers"],
  "Cameras & Accessories": ["All", "DSLR & Mirrorless", "Sports & action", "Point & Shoot", "Instant Cameras", "Camcorders", "Camera Tripod", "Camera Lenses", "Drone", "Flashes", "Gimbals", "Binoculars", "Other Camera Accessories"],
  "Computer Peripherals": ["All", "Printers", "Monitors", "Projectors", "Protable Projectors", "Toners", "Ink Cartidges", "Ink Bottles", "Receipt Printers", "Lamination Machines", "Barcode Scanners", "Currency Detectors"],
  "Gaming": ["All", "Gaming Consoles", "Gaming Mouse", "Gaming Keyboards", "Gamepads", "Games", "Accessory Kits", "Gaming Accessories Combo", "Gaming Mousepads", "Membership Cards", "Controllers", "Other Gaming Accessories", "Gaming Components"],
  "Health & Personal Care": ["All", "Trimmers", "Shavers", "Hair Straighteners", "Hair Dryers", "Epilators", "Glucometers And Accessories", "Blood Pressure Monitors", "Digital Thermometers", "Weighing Scales", "Massagers", "Nebulizers", "Vaporizers"],
  "Laptop Accessories": ["All", "Mouse", "Laptop Keyboards", "Router", "Data Cards", "UPS", "USB Gadgets", "Security Software", "Laptop battery", "Laptop Adapter", "Wireless USB Adapter", "Processor", "Other Accessories"],
  "Laptop and Desktop": ["All", "Laptops", "Gaming Laptops", "Desktop PCs", "All In One PCs", "Mini PCs", "Tower PCs", "PC Finder", "GST Invoice on Laptops", "Laptop Buying Guide"],
  "Mobile Accessory": ["All", "Plain Cases", "Designer Cases", "Screen Guards", "Camera Lens protectors", "Tablet Accessories", "Mobile Cable", "Mobile Charging Mobile Charger", "Mobile Pouches", "Mobile Flash", "Mobile Holder", "Mobile USB Gadget", "Mobile Accessories Combos"],
  "Powerbank": ["All", "Powerbank"],
  "Smart Home Automation": ["All", "Smart Assistants", "Smart Lights", "Smart Cameras", "Smart Switches", "Smart Door Locks", "Sensors & Alarms"],
  "Smart Wearables": ["All", "Smart Watches", "Smart Bands", "Smart Glasses"],
  "Storage": ["All", "Mobile Memory Card", "Computer Storage Pendrive", "Mobile Storage Pendrive", "External Hard Drive", "Internal Hard Drive"],
  "Tablets": ["All", "Tablets With Call Facility", "Tablets Without Call Facility"]
};
const home = {
    "Home Furnishings": ["All", "Bed Linens", "Bedsheets", "Blankets", "Curtains & Accessories", "Bath linen", "Floor Covering", "Covers & Protection", "Cushions & Pillows", "Kitchen Linen Sets", "Table Linen Sets", "Sofa & Curtain Fabrics", "Branded Collections"],
    "Living Room": ["All", "Sofas Sets & Sectionals", "TV Units", "Dining Sets", "Coffee Tables", "Sofa Beds", "Recliners", "Living Room Chairs", "Cabinet & Drawers", "Bookshelves", "Shoe Racks", "Office Tables", "Office Chairs"],
    "Kitchen & Dining": ["All", "Cookware", "Lunchboxes, Bottles & Flasks", "Knives, Choppers & Cutters", "Gas Stoves & Accessories", "Kitchen Tools", "Tableware & Dinnerware", "Containers & Kitchen Storage", "Barware", "Bakeware", "Handjuicers & Grinders", "Disposable Supplies", "Outdoor Cooking"],
    "Bedroom room": ["All", "Mattresses", "Beds", "Wardrobes", "Side Tables", "TV Units", "Office Tables", "Office Chairs", "Bookshelves", "Bar Cabinets", "Bar Stools", "Rockign Chairs", " Benchers"],
    "Home Decor": ["All", "Lightings", "Stickers & Wallpapers", "Paintings & Posters", "Clocks", "Showpieces & Decoratives", "Wall Decor", "Flowers & Vases", "Home Fragrances", "Windchimes & Dream Catcher", "Photo Frames & Albums", "Diyas, Candles & Holders", "Festive & Gifting"],
    "Tools & Utility": ["All", "Hand Tools", "Power Tools", "Measuring Tools", "Home Storage & Organizers", "Umbrellas", "Appliance Trolley & Stands", "Cloth Dryer Stand", "Appliance Filter & Cartridges", "Laundary Organization", "Lock & Security", "Fire & Personal Safety", "Paint Supplies & Equipments"],
    "Lightings & Electricals": ["All", "Bulbs", "Emergency Lights", "Torches", "Tubelights", "Extenstion Cords", "Outdoor Lamps", "Batteries", "Electrical Wire", "Electrical Socket", "Electric Doorbell", "Solar Lights, Panels & Batteries", "Electrical Hardware"],
    "Space Saving": ["All", "Portable Laptop Tables", "Collapsible Wardrobes", "Bean Bags & Covers", "Shoe Racks", "Cabinet Drawers", "Inflatable Sofas", "Hammock Swings", "Home Temples", "Bookshelves", "TV Mounts", "Kitchen Trolley", "Kitchen Cabinet"],
    "Cleaning & Bath": ["All", "Mops", "Cleaning Supplies", "House Hold supplies", "Air Freshners", "Cleaning Gloves", "Liquid Detergents", "Taps & Faucet", "Toothbrush holder", "Bathroom Rack & Shelves", "Shower Heads","Bath & Kitchet Fittings", "Bathroom Accessories"],
    "Kids Furniture": ["All", "Bunk Beds", "Kids'Seating", "Kids' Table", "Kids' Chairs", "Kids' Sofas", "Bookshelves", "Chest of Drawers", "Cupboards", "Shoe Racks", "Kids' Bean Bags", "Portable Pool", "Sofa Beds"],
    "Pet & Gardening": ["All", "Plant Seeds", "Pots & Planters", "Plant & Planters", "Garden Tool Set", "Watering Equipments", "Dog Essentials", "Cat Essentials", "Fish & Aquatic", "Pet Grooming & Hygiene", "Pet Toys", "Pet Health & Safety"]
}
const appliances = {
    "Televisions": ["All", "New Launches", "Top Sellers", "24-32 Inch", "40-43 Inch", "50-55 Inch", "Big Screen TVs", "Smart TVs", "4K UHD TVs", "The Frame", "OLED TVs", "QLED TVs", "Nanocell TVs"],
    "Washing Machines": ["All", "New Launches", "Fully Automatic Front Load", "Semi Automatic Top Load", "Fully Automatic Top Load", "Washer Dryer"," Washer Only", "Dishwasher", "Energy Efficient", "#JustHere", "Bestsellers", "Top Brands"],
    "Air Conditioners": ["All", "New Launches", "Inverter ACs", "Split ACs", "Window ACs", "#justHere", "Energy Efficient ACs", "5 Star ACs", "Best Sellers", "1 Ton ACs", "1.5 Ton ACs", "Wi-fi Enabled", "Top Brands"],
    "Refrigerators": ["All", "New Launches", "Single Door", "Double Door", "Triple Door", "Side by Side", "4 Door", "Mini Regrigerators", "Convertible", "Bottom Mount", "Energy-Efficient"],
    "Kitchen Appliances": ["All", "New Launches", "Microwave Ovens", "Oven Toaster Grills (OTG)", "Juicer/Mixer/Grinder", "Electric Kettle", "Induction Cooktops", "Chimneys", "Coffee Makers", "Sandwich Makers", "Pop Up Toaster", "Electric Cookers", "Wet Grinders"],
    "Home Appliances": ["All", "New Launches", "Irons", "Water Purifiers", "Inverters", "Vacuum Cleaners", "Sewing Machines", "Voltage Stabilizers", "Air Purifiers", "Landline Phones"],
    "Seasonal Appliances": ["All", "New Launches", "Air Coolers", "Fans", "Water Geysers", "Immersion Rods", "Room Heater"],
    "Premium Appliances": ["All", "Premium Televisions", "Premium Washing Machines", "Side By Side Refrigerators", "Vacuum Cleaners", "Dishwashers", "Premium ACs", "Designer Fans", "Washer Dryers", "Four Door Refrigerators"],
    "Buying Guides": ["All", "Televisions", "Washing Machines", "Refrigerators", "Air Conditioners", "Water Purifiers", "Air Purifiers", "Chimneys", "Water Geysers"],
    "Flipkart Benefits": ["All", "Exchange Offers", "No Cost EMI", "Extended Warranty", "Complete Appliance Protection", "Save More on Business Purchase", "Appliance Service Plan"]
}
const others = {
    "Beauty & Personal Care": ["View All", "Bath & Oral Care", "Personal Hygiene", "Eye Makeup", "Face Makeup", "Lip Makeup", "Hair Care", "Bath Essentials", "Women's Personal Hygiene", "Body & Skin Care", "Luxury", "Top Brand Deals"],
    "Men's Grooming": ["View All", "Face Washes", "Beard Oils", "Hair Styling", "Shaving Essentials", "Aftershave", "Face Creams & Face Packs", "Soaps & Bodywashes", "Men's Grooming Combos", "Sexual Wellness"],
    "Food & Drinks": ["View All", "Beverages", "Nuts & Dry Fruits", "Cooking Essentials", "Breakfast Items", "Snacks Corner", "Jams, spreads & Honey", "Ready to Cook & Eat", "Chocolates", "Baking Essentials", "Sweets Store", "Top Brand Deals"],
    "Nutrition & Health Care": ["View All", "Masks", "Ayurvedic Supplements", "Health Drinks", "Vitamin Supplements", "Protein Supplements", "Women's Safety", "Home Medicines", "Home Medical Supplies", "Healthcare Comos", "Professional Medical Supplies", "Top Brand Deals"],
    "Baby Care": ["View All", "Baby Diapers", "Baby Wipes", "Baby Bath & Grooming", "Baby Gift Sets & Combo", "Baby Medical & Health Care", "Nursing & Breast Feeding", "Feeding Bottles, Utensils & Accessories", "Baby Food", "Baby Bedding", "Baby Gear", "Top Brand Deals"],
    "Toys & School Supplies": ["View All", "Remote Control Toys", "Soft Toys", "Puzzles", "Board Games", "Learning & Educational Toys", "Cars & Die-Cast Vehicles", "Baby Toys", "Gifting Toys", "School Bags & Backpacks", "School Supplies", "Top Brand Deals"],
    "Sports & Fitness": ["View All", "Badminton", "Cricket", "Cycling", "Football", "Fitness Equipment", "Supports", "Shakers & Sippers", "Gym Gloves", "Dumbbells", "Yoga", "Top Branded Deals"],
    "Books & Music": ["View All", "Test prep", "Academics", "Literature & Fiction", "Non Fiction", "Young Readers", "E-Learning", "Indian Languages", "Acoustic Guitars", "Musical Keyboards", "Microphones", "Stage Equipment & Accessories"],
    "Stationary & Office Supplies": ["View All", "Pens & Gift Sets", "Notebooks & Diaries", "Art Supplies", "Calculators", "Keychains", "Card Holders", "Desk Organizers", "Office Supplies", "Office Equipments", "Party Supplies", "Top Brand Deals"],
    "Auto Accessories": ["View All", "Bike Essentials", "Car & Bike Covers", "Car Air Freshener", "Car Bluetooth Device", "Car Lubricant", "Car Vacuum Cleaner", "Car Media Player", "Helmet", "Vehicle Washing & Cleaning Products", "Tyres", "Top Brand Deals"],
    "Safety & Hygiene Essentials": ["View All", "Masks", "Sanitizers", "Hand Wash", "Gloves", "PPE Kits", "Face Shields", "UV Sterilizer Box", "Safety Goggles", "Vitamins for Immunity"]
}
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
          case "Home":
              arr = home;
              break;
          case "Appliances":
              arr = appliances;
              break;
          case "Beauty, Toys & More":
            arr = others;
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
