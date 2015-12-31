
$(document).ready(function() {
var gridReset = function() {


	var input = prompt("Enter a number between 1 and 80.");
	while (input < 1 || input > 80) {
		var input = prompt("Sorry, number of out range (1-80). Try again.");
	}

	var size = $("#container").width()/input - 2; // subtract 2 to account for border size...?

	for (var j = 1; j <= input; j++) {
		for (var i = 1; i <= input; i++) {
			$("#container").append("<div class='square'></div>");
		}
		$("#container").append("<div class='new_row'></div>");
	}
	
	$(".square").css("width", size);
	$(".square").css("height", size);

	//When hovering over any square, change from black to a random color
	$(".square").mouseenter(function() {
		var color = "#";
		for (k = 0; k < 3; k++) {
   		 	color += ("0" + (Math.random()*256|0).toString(16)).substr(-2);
		}
		$(this).css("background-color", color);	
	});

};
	gridReset();


	$("button").click(function() {
		$(".square").remove();
		gridReset();
	});

});