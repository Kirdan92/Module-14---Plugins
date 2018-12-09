'use strict';
(function(){ 
// Gooogle Maps init	
window.initMap = function(){
  // The location of Uluru
  var bernabeu = {lat: 40.4531, lng: -3.6883};
  var markers = {};
  console.log(slidesData[0].coords);

  function moveToLocation(lat, lng){
    var center = new google.maps.LatLng(lat, lng);
    map.panTo(center);
}
  // The map, centered at Bernabeu Stadium
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 4, center: bernabeu});

  var marker = new google.maps.Marker({position: bernabeu, map: map});

  // Creating markers based on slidesData
  	for(var i = 0; i < slidesData.length; i++){
  		markers[i] = new google.maps.Marker({position: slidesData[i].coords, map: map});
  		markers[i].addListener('click', (function() {
		  flkty.select(this);
		}).bind(i));
  }
}


//Mustache Slides template
	var templateSlide = document.getElementById('template-slide-item').innerHTML;
	

	Mustache.parse(templateSlide);
	

	
	var listSlides = '';

	for(var i = 0; i < slidesData.length; i++){
		listSlides += Mustache.render(templateSlide, slidesData[i]);
	}
	

	
	var fullSlidesList = Mustache.render(listSlides);
	results.insertAdjacentHTML('beforeend', fullSlidesList);


//Carousel logic

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


//CEnter map on slide change
flkty.on( 'change', function( index ) {
	var coords = slidesData[index].coords;
	moveToLocation(coords.lat, coords.lng);
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