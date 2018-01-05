$( document ).ready(function() {
$("#sizePicker").submit(function() {
    //alert("submitted");
    // Select size input
    var grid_height  = $('#input_height').val();
    var grid_width   = $('#input_width').val();
    $("#span1").text("grid_height: " + grid_height).show();
    $("#span2").text("grid_width: " + grid_width).show();

    makeGrid(grid_width, grid_height);

    event.preventDefault();
});
});

// When size is submitted by the user, call makeGrid()
function makeGrid(w, h) {
	$("#pixel_canvas").css("border-collapse", "collapse");
	$("#pixel_canvas tr").css("border", "1px solid black");
	$("#pixel_canvas td").css("border", "1px solid black");		
	$("pixel_canvas").css("background-color", "#f5f5f5");
	//$("pixel_canvas td").css("background-color", "yellow");

	for (var i = 0; i < h; i++) {	
		$("#pixel_canvas").append("<tr class='trClass'></tr>");
	}

	$("#pixel_canvas tr").each(function() {
			for (var j = 0; j < w; j++) 
				$(this).append("<td class='tdClass'>blaaaa</td>");
	});

	/*
	for (var i = 0; i < h*0; i++) {
		$("#pixel_canvas").append("<tr class='trClass'></tr>");

		$("#pixel_canvas tr").each(function() {
			for (var j = 0; j < w; j++) 
				$(this).append("<td class='tdClass'>blaaaa</td>");
			}
		});
	}*/
}
