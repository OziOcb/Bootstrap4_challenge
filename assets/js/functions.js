/* //────  ──────────────────────────────────────────────────────────────────────────────────
  MAIN NAVIGATION 
//────  ──────────────────────────────────────────────────────────────────────────────────*/
// Add ...--active class to the Toggler
const toggler = document.getElementById('main-navi-toggler');

toggler.addEventListener('click', function() {
  toggler.classList.toggle('toggler--active')
}, false)


// Remove .toggle--active class from #main-navi-toggler after clicking on any .nav-link
const navigationLink = document.querySelectorAll('.nav-link');
const navLinkLength = navigationLink.length;

for (i = 0; i < navLinkLength; i++) {
  navigationLink[i].addEventListener('click', function() {
    document.getElementById('main-navi-toggler').classList.remove('toggler--active');
  }, false)
};

/* //────  ──────────────────────────────────────────────────────────────────────────────────
  SMOOTH SCROLL
//────  ──────────────────────────────────────────────────────────────────────────────────*/
// Make that the scrolling to the anchor includes the height of the fixed-nav
const defaultDuration = 777 // ms
const edgeOffset = 65 // px
zenscroll.setup(defaultDuration, edgeOffset)

/* //────  ──────────────────────────────────────────────────────────────────────────────────
  RADIAL INDICATORS
//────  ────────────────────────────────────────────────────────────────────────────────── */
const radialObj1 = radialIndicator('#indicatorContainer1', {
  barColor : '#f34739',
  barBgColor: '#e5e3e3',
  barWidth : 6,
  initValue : 0,
  radius: 105,
  roundCorner: true,
  displayNumber: false,
  frameTime: 1
}); 

radialObj1.animate(0);

const radialObj2 = radialIndicator('#indicatorContainer2', {
  barColor : '#009989',
  barBgColor: '#e5e3e3',
  barWidth : 6,
  initValue : 0,
  radius: 105,
  roundCorner: true,
  displayNumber: false,
  frameTime: 1
}); 

radialObj2.animate(0);

const radialObj3 = radialIndicator('#indicatorContainer3', {
  barColor : '#152b3c',
  barBgColor: '#e5e3e3',
  barWidth : 6,
  initValue : 0,
  radius: 105,
  roundCorner: true,
  displayNumber: false,
  frameTime: 1
}); 

radialObj3.animate(0);

// Check if an element is in the viewport
const isInViewport = elem => {
  const bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Trigger Radial Indicators when the .growth section appears in the viewport
const growthSection = document.querySelector('.indicator');

window.addEventListener('scroll', function (event) {
	if (isInViewport(growthSection)) {
    radialObj1.animate(50);
    radialObj2.animate(35);
    radialObj3.animate(80);
	}
}, false);

/* //────  ──────────────────────────────────────────────────────────────────────────────────
  Projects and Logos Sections Random Highlight
//────  ────────────────────────────────────────────────────────────────────────────────── */

//──── BASE / HELPERS ────────────────────────────────────────────────────────────────────
// Create MQ for each breakepoint
const mq4 = window.matchMedia( "(min-width: 30em)" );
const mq5 = window.matchMedia( "(min-width: 40em)" );
const mq6 = window.matchMedia( "(min-width: 50em)" );
const mq7 = window.matchMedia( "(min-width: 60em)" );

// Create a function that generates random numbers, with the ability to choose a range
const randomNum = num => Math.floor(Math.random() * num) + 1;

// Generate a random number from 1 to 4 for horizontal lines
// Note that, only the smallest MQ, in the Projects Section, has 4 horizontal lines!
const randomHorizontalLine = section => {
  if (section === 'projects') {
    if (mq4.matches) {
      return randomNum(3);
    } else {
      return randomNum(4);
    }
  } else {
    return randomNum(4);
  }
};

// Generate a random number from 1 to 3 for columns
// Note that, the number of visible tiles/logos grows by 1, whit each MQ
const randomVerticalLine = () => {
  if (mq7.matches) {
    return randomNum(7)
  } else if (mq6.matches) {
    return randomNum(6)
  } else if (mq5.matches) {
    return randomNum(5)
  } else if (mq4.matches) {
    return randomNum(4)
  } else {
    return randomNum(3)
  }
};

//──── MAIN FUNCTION ──────────────────────────────────────────────────────────────────
// Remove ...--active class form every element of a highlightet section
const tiles = document.getElementsByClassName('projects__item');
const logos = document.getElementsByClassName('logos__item');

const removeClasses = el => {
  const elementLength = el.length;
  
  if (el === tiles) {
    for (i = 0; i < elementLength; i++) {
      el[i].classList.remove('projects__item--active')
    }
  } else {
    for (i = 0; i < elementLength; i++) {
      el[i].classList.remove('logos__item--active')
    }
  }
};

// Create a function that chooses and highlights a random tile
const randomTileHighlight = () => {
  // Chooses a random tile
  const tile = document.getElementsByClassName(`projects__item--${randomHorizontalLine('projects')}-${randomVerticalLine()}`)[0];

  // Add ...--active class to that tile
  tile.classList.add('projects__item--active');
};

// Create a function that chooses and highlights a random logo
const randomLogoHighlight = () => {
  // Chooses a random logo
  const logo = document.getElementsByClassName(`logos__item--${randomHorizontalLine()}-${randomVerticalLine()}`)[0];

  // Add ...--active class to that logo
  logo.classList.add('logos__item--active');
};

// Create a timer and a function that stops it.
let timer = setInterval(switchHighlightedElement, 4000);

const stopTimer = () => {
  clearInterval(timer);
};

// Swtich between highlighted elements 
function switchHighlightedElement() {
  // Projects
  removeClasses(tiles);
  randomTileHighlight();

  // Logos
  removeClasses(logos);
  randomLogoHighlight();
};

//──── EVENTS ────────────────────────────────────────────────────────────────────────────
// Create variables for each section
const projectsSection = document.querySelector(".projects");
const logosSection = document.querySelector(".logos");

// Create a function that resets the timer and highlights a new element
const resetInter = time => {
  stopTimer();
  timer = setInterval(switchHighlightedElement, time);
  switchHighlightedElement();
};

// Create a function that: 
//  stops the timer and removes ...--active class when a hover occurs on a specific section
//  and Re-start the timer after leaving the section or after clicking on a link
const events = section => {
  // Stop the timer and remove ...--active class 
  section.addEventListener("mouseover", function( event ) {   
    stopTimer();
    if (section === projectsSection) {
      removeClasses(tiles);
    } else if (section === logosSection) {
      removeClasses(logos);
    }
  }, false);

  // fire again the random highlighting of a element, when the cursor leaves a section
  section.addEventListener("mouseleave", function( event ) {   
    resetInter(4000);
  }, false);

  // fire again the random highlighting of a element, after a click on a link
  section.addEventListener("click", function( event ) {   
    resetInter(4000);
  }, false);
};

events(projectsSection);
events(logosSection);