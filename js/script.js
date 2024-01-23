////////////////////////////////////////////////////////////
/////// Making the mobile navigation
const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Scrooling effect

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); //prevent default so that we can apply our method on the event listeners
    const href = link.getAttribute("href");
    // console.log(href);
    // console.log(e);

    //scroll back to the top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      console.log(href);
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // close the navigation links
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

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
