
var num=16;
var boxes = Math.pow(num,2);

$(document).ready(function(){
	setup(num);

	// $(".pix").mouseenter(function(){
	// 	$(this).css("background-color","black");
	// });

	$("#clear").click(clear);
	
	$(".middle #sixteen").click(setup(16));

});



var setup = function(num){
	$(".container").empty();

	for(var i=0;i<num; i++){
		for(var j=0;j<num;j++){	
			$(".container").append("<div class='pix'></div>");
		}
	} 
	console.log(boxes);
	$(".pix").css("height", 480/num);
	$(".pix").css("width", 480/num);

	$(".pix").mouseenter(function(){
		$(this).css("background-color","black");
	});
}


var clear = function(){
	
	var num = prompt("how many boxes across would you like");
	
	setup(num);

	// $(".pix").mouseenter(function(){
	// 	$(this).css("background-color","black");
	// });
}