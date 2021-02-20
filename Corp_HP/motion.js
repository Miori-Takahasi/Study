
$(function() {

	$('#message').hide().fadeIn(1700);
	
	$('.header-icon').on('click', function() {
		$(this).toggleClass('isClose');
		if($(this).hasClass('isClose')) {
			$('#header-icon-image').attr('src','images/ham_close.svg');
		} else {
			$('#header-icon-image').attr('src','images/hamburger.svg');
		}
	});

});
