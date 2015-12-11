// JavaScript Document
$( document ).ready(function() {
	
	//call rotator on testimonials
	if ($('.testimonials').length > 0) {
	$('.testimonial-wrapper').cycle({ 
			fx:    'fade',
			speed:  'slow', 
			timeout: 7000, 
			pause:   true,
			next:   '.testimonial-next', 
			prev:   '.testimonial-prev'
	});
	}
	
	//footer funcitonality
	$('.footer-parent').click(function(){
		$(this).find('.footer-child, .footer-icon').toggleClass('active');	
		return false;
	});

});