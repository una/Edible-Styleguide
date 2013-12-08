//My Accordion {
document.ready(function(){
$('nav ul li').find('.sub-nav').slideUp()
});

$('nav ul li').on('click', function(){
	$('nav ul li').find('.sub-nav').slideUp()
	$(this).find('.sub-nav').slideDown();
	});

// $(document).ready(function() {
// 	//ACCORDION BUTTON ACTION	
// 	$('nav ul li a').click(function() {
// 		$('.sub-nav').slideUp('normal');	
// 		$(this).next().slideDown('normal');
// 	});
 
// 	//HIDE THE DIVS ON PAGE LOAD	
// 	$(".sub-nav").hide();
 
// });