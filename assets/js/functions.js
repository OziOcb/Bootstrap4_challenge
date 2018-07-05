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
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

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