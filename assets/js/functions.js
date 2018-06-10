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
