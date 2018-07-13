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
var radialObj1 = radialIndicator('#indicatorContainer1', {
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

var radialObj2 = radialIndicator('#indicatorContainer2', {
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

var radialObj3 = radialIndicator('#indicatorContainer3', {
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
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

var growth = document.querySelector('.indicator');
window.addEventListener('scroll', function (event) {
	if (isInViewport(growth)) {

    radialObj1.animate(50);
    radialObj2.animate(35);
    radialObj3.animate(80);

	}
}, false);

/* //────  ──────────────────────────────────────────────────────────────────────────────────
  Projects Section Random Highlight
//────  ────────────────────────────────────────────────────────────────────────────────── */
// Stworzyc media query dla kazdej szerokosci ekranu
const mq4 = window.matchMedia( "(min-width: 30em)" );
const mq5 = window.matchMedia( "(min-width: 40em)" );
const mq6 = window.matchMedia( "(min-width: 50em)" );
const mq7 = window.matchMedia( "(min-width: 60em)" );

// Stworzyć funkcje do generowania losowych liczb zaleznie od MQ
function randomNum(num) {
  return Math.floor(Math.random() * num) + 1;
}

// Funkcjia musi
// Usunac klase projects__item--active z kazdego elementu
const tiles = document.getElementsByClassName('projects__item');
function removeClasses() {
  for (i = 0; i < tiles.length; i++) {
    tiles[i].classList.remove('projects__item--active')
  }
}
removeClasses();


// Wygenerować losową liczbe od 1 do 4 dla poziomu
// Wziasc pod uwage to ze tylko na najmiejszym MQ sa 4 linie kafelkow
function randomHorizontalLine() {
  let hori;
  if (mq4.matches) {
    hori = randomNum(3);
  } else {
    hori = randomNum(4);
  }
  return hori;
};

// Wygenerować losową liczbe od 1 do 3 dla pionu
// Wziasc pod uwage to ze z kazdym kolejnym MQ liczba kafelkow zwieksza sie o 1
function randomVerticalLine() {
  let verti;
  if (mq7.matches) {
    verti = randomNum(7)
  } else if (mq6.matches) {
    verti = randomNum(6)
  } else if (mq5.matches) {
    verti = randomNum(5)
  } else if (mq4.matches) {
    verti = randomNum(4)
  } else {
    verti = randomNum(3)
  }
  return verti;
}

// Dodac klase --active do losowo wygenerowanego kafelka
const tile = document.getElementsByClassName(`projects__item--${randomHorizontalLine()}-${randomVerticalLine()}`)[0];
function highlightRandomTile() {
  tile.classList.add('projects__item--active');
}
highlightRandomTile();



console.log(tile);




// Do odpowieniego elementu (np. .projects__item--1-1) dodać klase projects__item--active

// Zapętlić cala ta funkcjie 