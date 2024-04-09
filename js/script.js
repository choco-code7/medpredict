///////////////////////////////////////////////////////////
// Make mobile navigation work

document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation
  const headerEl = document.querySelector(".header");
  const mainNav = document.querySelector(".main-nav");
  const btnNavEl = document.querySelector(".btn-mobile-nav");

  function toggleNavOpen() {
    headerEl.classList.toggle("nav-open");
  }

  btnNavEl.addEventListener("click", toggleNavOpen);

  mainNav.addEventListener("click", function (event) {
    if (event.target.classList.contains("main-nav-link")) {
      // Prevent default action of link when clicked
      // event.preventDefault();
      toggleNavOpen();
    }
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) {
    document.body.classList.add("no-flexbox-gap");
  }
}

checkFlexGap();

// Intersection Observer for animating features
const features = document.querySelectorAll(".feature");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2, // Adjust intersection threshold as needed
};

const observer = new IntersectionObserver(animateFeatures, options);

features.forEach((feature, index) => {
  feature.dataset.index = index;
  observer.observe(feature);
});

///////////////////////////////////////////////////////////

// Function to animate the features
function animateFeatures(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const feature = entry.target;
      feature.style.opacity = "1";
      feature.style.transform = "translateY(0)";
      feature.style.transitionDelay = `${feature.dataset.index * 0.2}s`; // Add delay to stagger the animation
    }
  });
}

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

/////////////////////////////////////////////////
// set the corrent year

var currentYear = new Date().getFullYear();

// Set the copyright text
document.getElementById("copyright").innerHTML =
  "© " +
  currentYear +
  " Disease Prediction System | Developed by Ahmed Mohamed";

/////////////////////////////////////////////////
// Function to switch between tabs
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const questions = faq.querySelector(".questions");
  const answer = faq.querySelector(".answer");

  questions.addEventListener("click", () => {
    faq.classList.toggle("active");
    if (faq.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      questions.querySelector("svg").classList.add("rotate");
    } else {
      answer.style.maxHeight = null;
      questions.querySelector("svg").classList.remove("rotate");
    }
  });
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   // Exclude links with class "btn--full" or href "doc.html"
//   if (
//     !link.classList.contains("btn--full") &&
//     link.getAttribute("href") !== "doc.html"
//   ) {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const href = link.getAttribute("href");

//       // Scroll back to top
//       if (href === "#") {
//         window.scrollTo({
//           top: 0,
//           behavior: "smooth",
//         });
//       }

//       // Scroll to other links
//       if (href !== "#" && href.startsWith("#")) {
//         const sectionEl = document.querySelector(href);
//         sectionEl.scrollIntoView({ behavior: "smooth" });
//       }

//       // Close mobile navigation
//       if (link.classList.contains("main-nav-link")) {
//         headerEl.classList.toggle("nav-open");
//       }
//     });
//   }
// });
