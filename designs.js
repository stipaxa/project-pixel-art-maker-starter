$("#sizePicker").submit(function() {
    // Select size input
    var grid_height  = $("#input_height").val();
    var grid_width   = $("#input_width").val();

    drawGrid(grid_width, grid_height);
    styleGrid();
    
    event.preventDefault();
});

// Make up the grid
function styleGrid(event) {
    $(".pixelTable").click(function(event){
        var target = $(event.target);
        if(target.is("td")) {
            target.css("background-color", $("#colorPicker").val());
        } 
    });

    $(".pixelTable").mousedown(function(event) {
        $(".pixelTable").mousemove(function(event) {
            var target = $(event.target);
            if(target.is("td")) {
                target.css("background-color", $("#colorPicker").val());
            } 
            event.preventDefault();
        })
    }).mouseup(function(event) {
        $(".pixelTable").unbind("mousemove");
        event.preventDefault();
    });
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
