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
