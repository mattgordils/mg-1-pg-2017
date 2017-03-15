'use strict';

var transitionIn = function() {
  $('body').addClass('loaded');
};

var transitionIntoView = function() {
	var scroll = $(window).scrollTop();
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  $('.transition-in').each(function(){
  	var section = $(this);
		var sectionTop = section.offset().top;

		if (sectionTop - scroll - windowHeight < 0) {
    	section.addClass('visible')
    } else {
    	section.removeClass('visible')
    }
  });
}

var parallaxblock = function() {
  var scroll = $(window).scrollTop();
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var parallaxBlock = $('.parallax-block');
  var parallaxBlockSpeed = parallaxBlock.attr('data-speed');

  if (parallaxBlock !== null && windowWidth > 600) {
		
		$(parallaxBlock).each(function(){
			var section = $(this);
			var sectionTop = section.offset().top;
			var sectionHeight = section.height();
      var sectionBottom = sectionTop + sectionHeight;

      var scrollStart = (sectionTop - scroll - windowHeight) * -1;
      var scrollEnd = sectionHeight + windowHeight;

      var speed = 1 - (scrollStart/scrollEnd);

      var startPoint = section.data('start');
      var endPoint = section.data('end');
      var movement = startPoint * speed;
      // if (startPoint < endPoint) {
      // 	console.log('down');
      // 	var movement = (endPoint + startPoint) * speed * -1 + startPoint;
      // }

      console.log(speed);

      if (sectionTop - scroll - windowHeight < 0 && sectionBottom - scroll > 0) {
      	section.css({'transform': 'translate3d(0,' + movement + '%, 0)'});
      }

		});
	}
}

$(document).ready(function() {
});

$(window).on('load', function() {
	// parallaxblock();
  transitionIn();
  transitionIntoView();
});

$(window).scroll(function() {
	// parallaxblock();
	transitionIntoView();
});

$(window).resize(function() {
});
