const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Updates the nav element
const nav = Array.from(document.querySelector("nav").children),
  navTexts = [
    siteContent["nav"]["nav-item-1"],
    siteContent["nav"]["nav-item-2"],
    siteContent["nav"]["nav-item-3"],
    siteContent["nav"]["nav-item-4"],
    siteContent["nav"]["nav-item-5"],
    siteContent["nav"]["nav-item-6"]
  ],
  navElems = nav.map((elem, i) => (elem.textContent = navTexts[i]));

const navContainer = document.querySelector("nav");
const newNavOne = document.createElement("a");
const newNavTwo = document.createElement("a");

newNavOne.setAttribute.href = "#";
newNavOne.textContent = "Portfolio";
navContainer.appendChild(newNavOne);

newNavTwo.setAttribute.href = "#";
newNavTwo.textContent = "Charity";
navContainer.appendChild(newNavTwo);

const a = Array.from(document.querySelectorAll("a"));
a.map(elem => (elem.style.color = "green"));

//Updates the CTA
siteContent.cta.h1 = "DOM\nIs\nAwesome";
const ctaHeader = document.querySelector(".cta .cta-text h1"),
  ctaBtn = document.querySelector(".cta .cta-text button"),
  ctaImg = document.querySelector(".cta img");

ctaHeader.textContent = siteContent["cta"]["h1"];
ctaHeader.style.whiteSpace = "pre";
ctaBtn.textContent = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

//Updates main content
const mcHeaders = Array.from(document.querySelectorAll(".main-content h4")),
  mcHeaderTexts = [
    siteContent["main-content"]["features-h4"],
    siteContent["main-content"]["about-h4"],
    siteContent["main-content"]["services-h4"],
    siteContent["main-content"]["product-h4"],
    siteContent["main-content"]["vision-h4"]
  ],
  mcParas = Array.from(document.querySelectorAll(".main-content p")),
  mcParaTexts = [
    siteContent["main-content"]["features-content"],
    siteContent["main-content"]["about-content"],
    siteContent["main-content"]["services-content"],
    siteContent["main-content"]["product-content"],
    siteContent["main-content"]["vision-content"]
  ],
  mcImg = document.querySelector(".main-content .middle-img");

const mcHeaderElems = mcHeaders.map(
  (elem, i) => (elem.textContent = mcHeaderTexts[i])
);

const mcParaElems = mcParas.map(
  (elem, i) => (elem.textContent = mcParaTexts[i])
);

mcImg.src = siteContent["main-content"]["middle-img-src"];

//Updates contact section
const contactHeader = document.querySelector(".contact h4"),
  contactParas = Array.from(document.querySelectorAll(".contact p")),
  contactParaTexts = [
    siteContent["contact"]["address"],
    siteContent["contact"]["phone"],
    siteContent["contact"]["email"]
  ];

contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactElems = contactParas.map(
  (elem, i) => (elem.textContent = contactParaTexts[i])
);

//Updates footer text
const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
