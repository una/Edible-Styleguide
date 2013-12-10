$('.sub-nav').slideUp();

$('nav ul li:not(.sub-nav)').on('click', function(){
	$('nav ul li').find('.sub-nav').slideUp()
	$(this).find('.sub-nav').slideDown();
	});