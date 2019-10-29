const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const title = document.getElementsByTagName("title");
title.textContent = "Great Idea! DOM";

const navlinks = document.querySelectorAll('a');
navlinks[0].textContent = siteContent.nav["nav-item-1"];
navlinks[1].textContent = siteContent.nav["nav-item-2"];
navlinks[2].textContent = siteContent.nav["nav-item-3"];
navlinks[3].textContent = siteContent.nav["nav-item-4"];
navlinks[4].textContent = siteContent.nav["nav-item-5"];
navlinks[5].textContent = siteContent.nav["nav-item-6"];

const ctah1 = document.querySelector('h1');

const ctabutton = document.querySelector('button');
const ctaimg = document.querySelector('#cta-img');

ctah1.textContent = siteContent.cta.h1;
// ctah1.innerHTML = "DOM <br />Is<br /> Awesome";
ctah1.innerHTML = siteContent["cta"]["h1"].replace(/ /g, "<br>");
ctabutton.textContent = siteContent.cta.button;
ctaimg.src = siteContent.cta["img-src"];

const featuresh4 = document.querySelector('.top-content .text-content:first-child h4')
const featurescontent = document.querySelector('.top-content .text-content:first-child p');
// console.log(featurescontent);

featuresh4.textContent = siteContent["main-content"]["features-h4"];
featurescontent.textContent = siteContent["main-content"]["features-content"];

const abouth4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
const aboutcontent = document.querySelector('.top-content .text-content:nth-child(2) p');

abouth4.textContent = siteContent["main-content"]["about-h4"];
aboutcontent.textContent = siteContent["main-content"]["about-content"];

const midimg = document.querySelector('#middle-img');

midimg.src = siteContent["main-content"]["middle-img-src"];

const servicesh4 = document.querySelector('.bottom-content .text-content:first-child h4');
const servicescontent = document.querySelector('.bottom-content .text-content:first-child p');

servicesh4.textContent = siteContent["main-content"]["services-h4"];
servicescontent.textContent = siteContent["main-content"]["services-content"];

const producth4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
const productcontent = document.querySelector('.bottom-content .text-content:nth-child(2) p');

producth4.textContent = siteContent["main-content"]["product-h4"];
productcontent.textContent = siteContent["main-content"]["product-content"];

const visionh4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
const visioncontent = document.querySelector('.bottom-content .text-content:nth-child(3) p');

visionh4.textContent = siteContent["main-content"]["vision-h4"];
visioncontent.textContent = siteContent["main-content"]["vision-content"];

const contacth4 = document.querySelector('.contact h4');
// console.log(contacth4);
contacth4.textContent = siteContent.contact["contact-h4"];

const contactadd = document.querySelector('.contact p');
contactadd.textContent = siteContent.contact.address;
contactadd.innerHTML = "123 Way 456 Street <br /> Somewhere, USA";
// contactadd.textContent = 


const contactphone = document.querySelector('.contact p:nth-child(3)')
// console.log(contactphone);
contactphone.textContent = siteContent.contact.phone;

const contactemail = document.querySelector('.contact p:nth-child(4)')
// console.log(contactemail);
contactemail.textContent = siteContent.contact.email;

const footercopy = document.querySelector('footer p')
// console.log(footercopy);
footercopy.textContent = siteContent.footer.copyright;


navlinks.forEach(element => {element.style.color = 'green'})

const newNavPricing = document.createElement('a');
newNavPricing.href = "#";
newNavPricing.textContent = "Pricing";
navlinks[0].prepend(newNavPricing);

const newNavHome = document.createElement('a');
newNavHome.href = "#"
newNavHome.textContent = "Home";
navlinks[5].append(newNavHome);

ctabutton.addEventListener('click', (event) => {
  ctah1.textContent = 'blah'
  navlinks[0].textContent = 'blah'
  navlinks[1].textContent = 'blah'
  navlinks[2].textContent = 'blah'
  navlinks[3].textContent = 'blah'
  navlinks[4].textContent = 'blah'
  navlinks[5].textContent = 'blah'
  footercopy.textContent = 'blah'
  contactemail.textContent = 'blah'
  contactphone.textContent = 'blah'
  contacth4.textContent = 'blah'
  visionh4.textContent = 'blah'
  visioncontent.textContent = 'blah'
  producth4.textContent = 'blah'
  productcontent.textContent = 'blah'
  servicesh4.textContent = 'blah'
  servicescontent.textContent = 'blah'
  abouth4.textContent = 'blah'
  aboutcontent.textContent = 'blah';
  featuresh4.textContent = 'blah';
  featurescontent.textContent = 'blah';
  document.querySelector('body').style.background = 'pink';
})
