$(document).ready(function() {
	$('html').addClass('js');
	
	var $body = $('body'),
			$clickClose = $('#site-content');
	
	$('#open-menu').on('click', function(e) {
		e.stopPropagation();
		$body.toggleClass('active-menu');
		$clickClose.addClass('click-to-close');
		e.preventDefault();
	});
	
	$('#close-menu').on('click', function(e) {
		$body.removeClass('active-menu');
		$clickClose.removeClass('click-to-close');
		e.preventDefault();
	});
	
	// adding 'click to close' functionality to the main contet area
	$('#page-wrapper').on('click', '.click-to-close', function(e) {
		e.stopPropagation();
		$body.removeClass('active-menu');
		$clickClose.removeClass('click-to-close');
	})
	
});
