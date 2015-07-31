

$(document).ready(function(){
	$("span").hide().show("slow");
	// var $div = $("<div class='pix'></div>");
	for(var i=0;i<256; i++){
		$(".container").append("<div class='pix'></div>");
	} 
	$(".pix").mouseenter(function(){
		$(this).css("background-color","blue");
	});

	$("button").on("click", clear);

});



var clear = function(){
	$(".container div").css("background-color","red");
}