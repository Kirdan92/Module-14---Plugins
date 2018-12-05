'use strict';
(function(){ 
var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  freeScroll: true,
  hash: true
  //autoPlay: 5000
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.carousel', {
  // options
});
  
})(); 