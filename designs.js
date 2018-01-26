$("#size_picker").submit(function(event) {
    let grid_height = $("#input_height").val();
    let grid_width  = $("#input_width").val();

    // Remove old table, create new
    $("#pixel_canvas tr").remove();
    for (let i = 0; i < grid_height; i++) {    
        $("#pixel_canvas").append("<tr></tr>");
    }
    $("#pixel_canvas tr").each(function() {
        for (let j = 0; j < grid_width; j++) 
            $(this).append("<td></td>");
    });

    // Optimization: Select once, use many times
    let canvas_td = $("#pixel_canvas td");

    // Single click paint
    canvas_td.click(function(event){
        $(event.target).css("background-color", $("#color_picker").val());
        event.preventDefault();
    });

    // Drag and draw paint    
    canvas_td.mousedown(function(event) {
        canvas_td.mousemove(function(event) {
            $(event.target).css("background-color", $("#color_picker").val());
            event.preventDefault();
        })
    }).mouseup(function(event) {
        canvas_td.unbind("mousemove");
        event.preventDefault();
    });
    
    // Disable page reloading
    event.preventDefault();
});