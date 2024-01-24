////////////////////////////////////////////////////////////
/////// Making the mobile navigation
const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Scrooling effect

// const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);
// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault(); //prevent default so that we can apply our method on the event listeners
//     const href = link.getAttribute("href");
//     // console.log(href);
//     // console.log(e);

//     //scroll back to the top
//     if (href === "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//     //scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       console.log(href);
//       const sectionEl = document.querySelector(href);
//       console.log(sectionEl);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }
//     // close the navigation links
//     if (link.classList.contains("main-nav-link")) {
//       headerEl.classList.toggle("nav-open");
//     }
//   });
// });

///////////////////////////////////////////////////////////
// Making the sitcky navigation after the Hero section
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root: null, //root : null for enabling viewport
    threshold: 0, //this mean the event happen as soon as the 0% of the hero-section inside of the viewport
    rootMargin: "-80px", //height of sticky bar is 8 rem
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////////////////////////////////////
////////////////// LOGIC for website
// Data
const account1 = {
  owner: "Kartik Mishra",
  pin: 1111,
};

const account2 = {
  owner: "Ujjwal Baranwal",
  pin: 2222,
};

const account3 = {
  owner: "Ayush Yadav",
  pin: 3333,
};

const account4 = {
  owner: "Kabeer Sharma",
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const createUsername = function (acc) {
  acc.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsername(accounts);

// element
const labelWelcome = document.querySelector(".welcome");
const btnLogin = document.querySelector(".login__btn");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const containerApp = document.querySelector(".app");
const containerDefault = document.querySelector(".section-default");

//event listner
//// event handlers
let currentAcc;
btnLogin.addEventListener("click", function (e) {
  //prevent from submitting
  e.preventDefault();
  // console.log("log in");
  currentAcc = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAcc);
  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    console.log("LOGIN");
    //display UI and welcome message
    labelWelcome.textContent = `Welcome ${currentAcc.owner.split(" ")[0]}`;
    containerApp.style.opacity = 100;
    containerApp.style.display = "block";
    containerDefault.style.display = "none";

    // clearing input field
    inputLoginPin.value = inputLoginUsername.value = "";
  }
});
