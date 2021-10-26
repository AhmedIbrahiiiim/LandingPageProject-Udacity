// Start Global Variables
let mySections = document.querySelectorAll("section");
let myNav = document.getElementById("navbarList");
let myNavElements, secId, secData;
// End Global Variables

// build the nav
let navbarBuilder = () => {
  // To Have All My Elements
  myNavElements = "";
  // Looping Over All MySections To Get All The Ids & Data-navs
  for (let i = 0; i < mySections.length; i++) {
    secId = mySections[i].id;
    secData = mySections[i].dataset.nav;
    myNavElements += `<li><a class="menuLink" href="#${secId}">${secData}</a></li>`;
  }
  // Putting All The Elements in The Nav
  myNav.innerHTML = myNavElements;
  //SOLUTION-2 Using forEach
  /*
  mySections.forEach((section) => {
    secId = section.id;
    secData = section.dataset.nav;
    myNavElements += `<li><a class="menuLink" href="#${secId}">${secData}</a></li>`;
    console.log(myNavElements);
  });
  // Putting All The Elements in The Nav
  myNav.innerHTML = myNavElements;
  */
};
navbarBuilder();

// Add class 'active' to section when near top of viewport || Adding A Background
//Getting Where Is The Section In The Dev
let secTop = (section) => section.getBoundingClientRect().top;
// Making The Function That Are Gonna Check If The Section Is in The View Or Not
let activeSection = () => {
  mySections.forEach((section) => {
    let eleTop = secTop(section);
    // If Condition To Check If The Section In View Or Not
    if (eleTop < 500 && eleTop >= -380) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
};
// Adding The EventListener To The Window
window.addEventListener("scroll", activeSection);
/*
//SOLUTION-2
// Adding & Removing Active Class
let removeAct = (section) => section.classList.remove("active");
let addAct = (cond, section) => {
  if (cond) section.classList.add("active");
};
// Making The Function That Are Gonna Check If The Section Is in The View Or Not
let activeSection = () => {
  mySections.forEach((section) => {
    let eleTop = secTop(section);
    let inView = () => eleTop < 500 && eleTop >= -380;
    removeAct(section);
    addAct(inView(), section);
    
  });
};
// Adding The EventListener To The Window
window.addEventListener("scroll", activeSection);
*/

// For Making A Background on The Link That Has Been Clicked
let links = document.querySelectorAll("li a");
links.forEach((link) => {
  link.onclick = () => {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("clicked");
    }
    if (!link.classList.contains("clicked")) {
      link.classList.add("clicked");
    }
  };
});

// Links Smooth Scrolling
links.forEach((link) => link.addEventListener("click", linkClick));
function linkClick(link) {
  smoothScroll(link); // Call the "smoothScroll" function
}
function linkClick(link) {
  link.preventDefault();
  // Getting The Href For Choosing The Section
  let linkId = link.currentTarget.getAttribute("href");
  document
    .querySelector(linkId)
    .scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}
