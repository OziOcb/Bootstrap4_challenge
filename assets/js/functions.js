/* //────  ──────────────────────────────────────────────────────────────────────────────────
  MAIN NAVIGATION 
//────  ──────────────────────────────────────────────────────────────────────────────────*/

// Adds 'active' class to the Toggler
const toggler = document.getElementById('main-navi-toggler');

toggler.addEventListener('click', function() {
  toggler.classList.toggle('toggler--active')
}, false)


// Removes .toggle--active class from #main-navi-toggler after clicking on any .nav-link
const navigationLink = document.querySelectorAll('.nav-link');

for(i = 0; i < navigationLink.length; i++) {
  navigationLink[i].addEventListener('click', function() {
    document.getElementById('main-navi-toggler').classList.remove('toggler--active');
  }, false)
};

/* //────  ──────────────────────────────────────────────────────────────────────────────────
  SMOOTH SCROLL
//────  ──────────────────────────────────────────────────────────────────────────────────*/
// Makes that scrolling to the anchor includes the height of the fixed-nav
var defaultDuration = 777 // ms
var edgeOffset = 65 // px
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

// get the #growth section element
const isInViewport = elem => {
  const bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

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
// BASE
// Stworzyc media query dla kazdej szerokosci ekranu
const mq4 = window.matchMedia( "(min-width: 30em)" );
const mq5 = window.matchMedia( "(min-width: 40em)" );
const mq6 = window.matchMedia( "(min-width: 50em)" );
const mq7 = window.matchMedia( "(min-width: 60em)" );

// Stworzyć funkcje do generowania losowych liczb zaleznie od MQ
const randomNum = num => Math.floor(Math.random() * num) + 1;

// Wygenerować losową liczbe od 1 do 4 dla poziomu
// Wziac pod uwage to ze tylko na najmiejszym MQ sa 4 linie kafelkow
const randomHorizontalLine = section => {
  if (section === 'tiles') {
    if (mq4.matches) {
      return randomNum(3);
    } else {
      return randomNum(4);
    }
  } else {
    return randomNum(4);
  }
};

// Wygenerować losową liczbe od 1 do 3 dla pionu
// Wziac pod uwage to ze z kazdym kolejnym MQ liczba kafelkow zwieksza sie o 1
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

// Funkcjia musi
// Usunac klase projects__item--active z kazdego elementu
const tiles = document.getElementsByClassName('projects__item');
const logos = document.getElementsByClassName('logos__item');

const removeClasses = (el) => {
  if (el === tiles) {
    for (i = 0; i < el.length; i++) {
      el[i].classList.remove('projects__item--active')
    }
  } else {
    for (i = 0; i < el.length; i++) {
      el[i].classList.remove('logos__item--active')
    }
  }
};




// Stworzyc timer oraz funkcje ktora go zatrzymuje
let timer = setInterval(randomHighlight, 4000);

const stopTimer = () => {
  clearInterval(timer);
};






// funkacja ktora wybiera losowy kafelek
const randomTile = () => {
  // Wybiera losowy kafelek
  const tile = document.getElementsByClassName(`projects__item--${randomHorizontalLine('tiles')}-${randomVerticalLine()}`)[0];

  // Dodaje klase --active do losowo wygenerowanego kafelka
  tile.classList.add('projects__item--active');
};



// funkacja ktora wybiera losowe logo
// losowa liczba dla logos
const randomLogo = () => {
  // Wybiera losowe logo
  const logo = document.getElementsByClassName(`logos__item--${randomHorizontalLine('logos')}-${randomVerticalLine()}`)[0];

  // Dodaje klase --active do losowo wygenerowanego logo
  logo.classList.add('logos__item--active');
};



// funkcja ktora podswietla losowy kalfelek lub logo
function randomHighlight() {
  // Usówa klase --active z kadego kafelka
  removeClasses(tiles);
  randomTile();

  // Usówa klase --active z kadego logo
  removeClasses(logos);
  randomLogo();

};



// EVENTS
// Zatrzymac funkcje i usunac klase --active kiedy wystapi hover na caly .projects albo .logos
const projectsSection = document.querySelector(".projects");
const logosSection = document.querySelector(".logos");
// this handler will be executed every time the cursor is moved over a .projects

const events = section => {
  section.addEventListener("mouseover", function( event ) {   
    stopTimer();
    if (section === projectsSection) {
      removeClasses(tiles);
    } else {
      removeClasses(logos);
    }
  }, false);

  // resetuje interwal
  const resetInter = time => {
    stopTimer();
    timer = setInterval(randomHighlight, time);
    randomHighlight();
  };

  // odpala ponownie losowe podswietlanie kafleka, po opuszczeiu kursora
  section.addEventListener("mouseleave", function( event ) {   
    resetInter(4000);
  }, false);

  // odpala ponownie losowe podswietlenie, po kliknieciu w kafelek
  section.addEventListener("click", function( event ) {   
    resetInter(4000);
  }, false);
};

events(projectsSection);
events(logosSection);

