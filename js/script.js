'use strict';
(function(){ 
var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  hash: true,
  pageDots: false
});

	//Selecting slides
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
var resetIcon = buttons[0].querySelector('i');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );

});
resetIcon.addEventListener( 'click', function( event ){
  if ( !matchesSelector( event.target, 'i' ) ) {
    return;
  }
  flkty.select(0);
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.carousel', {
  // options
});
  
})(); 