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


// Radial Indicators
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

radialObj1.animate(50);

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

radialObj2.animate(35);

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

radialObj3.animate(80);