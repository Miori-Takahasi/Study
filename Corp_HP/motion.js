
$(function() {

	$('#message').hide().fadeIn(1700);
	
	$('.header-icon').on('click', function() {
		$(this).toggleClass('isClose');
		if($(this).hasClass('isClose')) {
			$(this).attr('src','images/ham_close.svg');
		} else {
			$(this).attr('src', 'images/hamburger.svg');
		}
	});

});
