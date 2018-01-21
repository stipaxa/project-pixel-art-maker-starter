$("#size_picker").submit(function(event) {
    var grid_height  = $("#input_height").val();
    var grid_width   = $("#input_width").val();

    $("#pixel_canvas tr").remove();
    for (var i = 0; i < grid_height; i++) {    
        $("#pixel_canvas").append("<tr></tr>");
    }

    $("#pixel_canvas tr").each(function() {
        for (var j = 0; j < grid_width; j++) 
            $(this).append("<td></td>");
    });   

    $("#pixel_canvas td").click(function(event){
        $(event.target).css("background-color", $("#color_picker").val());
        event.preventDefault();
    });

    $("#pixel_canvas td").mousedown(function(event) {
        $("#pixel_canvas td").mousemove(function(event) {
            $(event.target).css("background-color", $("#color_picker").val());
            event.preventDefault();
        })
    }).mouseup(function(event) {
        $("#pixel_canvas td").unbind("mousemove");
        event.preventDefault();
    });
    
    event.preventDefault();
});
