  $(document).ready(function() {
	$('#fullpage').fullpage({
    scrollingSpeed: 1000,
    loopHorizontal: false,
    controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		// fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'}
	});
});
