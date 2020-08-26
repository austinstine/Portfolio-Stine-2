
// Nav bar
var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

// Typewriter JS
const TypeWriter = function(txtElement, words, wait = 1000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  
  // Type Method
  TypeWriter.prototype.type = function() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
  
    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
    // Initial Type Speed
    let typeSpeed = 100;
  
    if(this.isDeleting) {
      typeSpeed /= 2;
    }
  
    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }
  
    setTimeout(() => this.type(), typeSpeed);
  }
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }
  
  
// Jquery function to Splash Screen
// (function(){

//   var jQ = jQuery.noConflict();

//   // custom functions START
//   jQ.fn.extend({

//     // splash
//     splashScreen: function(){
//       var splashPage = jQ('#stine-portfolio-splash'),
//           splashH1 = jQ('#stine-portfolio-splash-h1').children('h1'),
//           winSizeX = jQ(window).width(),
//           winSizeY = jQ(window).height(),
//           allContent = jQ('#stine-portfolio-nav, #stine-portfolio-services, #about, #stine-portfolio-work, #stine-portfolio-footer');
//       if (jQ(window).scrollTop() == 0){
//         splashPage.css({
//           width: winSizeX + 'px',
//           height: (winSizeY + 150) + 'px'
//         });
//         splashH1.children('span').fadeOut(2200, function(){
//           splashH1.children('span').text('art').css("color", "crimson");
//         }).fadeIn(1800, function(){
//           splashPage.fadeOut(1000);
//           allContent.animate({
//             opacity: '1'
//           },1000);
//         });
//       }
//       else {
//         splashPage.css('display', 'none');
//         allContent.animate({
//           opacity: '1'
//         }, 600);
//       }
//     },

//     // compute same height for bootstrap columns: needs columns custom CSS class as string parameter
//     sameHeightCols: function(colClass){
//       var allColsHeight = [];
//       jQ(colClass).each(function(){
//         allColsHeight.push(jQ(this).height());
//       });
//       var highestCol = Math.max(allColsHeight);
//       jQ(colClass).each(function(){
//         jQ(this).css('height', highestCol) + 'px';
//       });
//     },

//     // content fade-ins: needs CSS 'opacity: 0' set in stylesheet and CSS selector as string parameter
//     contentFadeIn: function(elClass){
//       jQ(elClass).each(function(){
//         if (jQ(this).css('opacity') == 0){
//           var winHeight = jQ(window).height(),
//               presentView = (jQ(window).scrollTop() + winHeight) - 50,
//               elementView = jQ(this).offset().top;
//           if (elementView <= presentView){
//             jQ(this).animate({
//               opacity: '1'
//             }, 600);
//           }
//         }
//       });
//     },

//   });
//   // custom functions END



//   // document ready START
//   jQ(document).ready(function(){

//     // splash
//     jQ(document).splashScreen();

//     // menu navigation animations
//     jQ(document).pageFades();

//     // keypoints descriptions animations
//     jQ(document).keypointsDescriptions();
    
//   // same height columns
//     // keypoints
//     var keyPointsCol = jQ('.FCC-portfolio-keypoint');
//     jQ(document).sameHeightCols(keyPointsCol);
//     // portfolio projects
//     var portfolioCol = jQ('.FCC-portfolio-single-container');
//     jQ(document).sameHeightCols(portfolioCol);

//   });
//   // document ready END

//   // window scroll START
//   jQ(window).scroll(function(){

//     var splashCheck = jQ('#stine-portfolio-splash').css('display');
//     if (splashCheck != 'none'){
//       jQ(window).scrollTop(0);
//     }

//   });

// })();

