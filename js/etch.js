
var num=16;
var boxes = Math.pow(num,2);

$(document).ready(function(){
	setup(num);
	$(".pix").mouseenter(function(){
		$(this).css("background-color","black");
	});
	
	$("button").on("click", clear);

});

var setup = function(num){

	for(var i=0;i<num; i++){
		for(var j=0;j<num;j++){	
			$(".container").append("<div class='pix'></div>");
		}
	} 
	console.log(boxes);
	$(".pix").css("height", 480/num);
	$(".pix").css("width", 480/num);

}


var clear = function(){
	$(".container").empty();
	var num = prompt("how many boxes across would you like");
	
	setup(num);

	$(".pix").mouseenter(function(){
		$(this).css("background-color","black");
	});
}