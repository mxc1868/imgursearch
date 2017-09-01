var curDrag

$("html").on("drop", "#trash", function(e) {
    e.preventDefault();
    var id = curDrag.parent().parent().attr("id");
    $.ajax({
        type: "DELETE",
        url: "/saved/"+id,
        success: function() {
            curDrag.parent().parent().fadeOut(function(){
                $(".grid").masonry();
            });
            
        }
    });
    $("#trash").css({color: "", fontSize: ""});
});


$("html").on("dragover", "#trash", function(e) {
    e.preventDefault();
    $("#trash").css({color: "red", fontSize: "5em"});
});

$("html").on("dragleave", "#trash", function(e) {
    $("#trash").css({color: "", fontSize: ""});
});

$("html").on("dragstart", ".grid-item img", function(e) {
    curDrag =$(e.target);
});

