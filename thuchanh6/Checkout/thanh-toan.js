$(document).ready (function(){
	$("#paybybank").click(function(){
		$('.checkout__banklist span').fadeIn();	
	});
	$("#payathome").click(function(){
		$('.checkout__banklist span').fadeOut();	
	});
});