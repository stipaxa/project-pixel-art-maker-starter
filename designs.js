$( document ).ready(function() {
$("#sizePicker").submit(function() {
    // Select size input
    var grid_height  = $("#input_height").val();
    var grid_width   = $("#input_width").val();
    //$("#span1").text("grid_height: " + grid_height).show();
    //$("#span2").text("grid_width: " + grid_width).show();

    drawGrid(grid_width, grid_height);
    styleGrid();

    event.preventDefault();
});
});

// Make up the grid
function styleGrid() {
	$("#pixel_canvas").css("border-collapse", "collapse");
	$("#pixel_canvas").css("margin","0 auto");

	$("#pixel_canvas td").css("border", "1px solid black");
	$("#pixel_canvas td").css("width", "10px");
	$("#pixel_canvas td").css("height", "10px");
	$("#pixel_canvas td").css("padding", "0px");
	$("#pixel_canvas td").css("background-color", "#ffff99");
}

// Draw the grid
function drawGrid(w, h) {
	$(".pixelTable").remove();
	for (var i = 0; i < h; i++) {	
		$("#pixel_canvas").append("<tr class='pixelTable'></tr>");
	}

	$("#pixel_canvas tr").each(function() {
			for (var j = 0; j < w; j++) 
				$(this).append("<td class='pixelTable'></td>");
	});	
}
