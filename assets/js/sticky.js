(function() {

  var scrollY = function () {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
/*
quand on scroll
si menu sort de l'écran
alors il deviendra fixe
*/
var element = document.querySelector('.menu')
var top = element.getBoundingClientRect().top + scrollY()
var onScroll = function () {
      if  (scrollY() > top) {
        element.classList.add('fixed')
      } else {
        element.classList.remove('fixed')
      }
   }  
window.addEventListener('scroll', onScroll)
})()