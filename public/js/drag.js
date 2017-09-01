var curDrag

$("html").on("drop", "#heart", function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/saved",
        data: { "html": curDrag.parent().parent().html()},
        success: function() {
            curDrag.parent().parent().fadeOut(function(){
                $(".grid").masonry();
            });
        }
    });
    $("#heart").css({color: "", fontSize: ""});
});


$("html").on("dragover", "#heart", function(e) {
    e.preventDefault();
    $("#heart").css({color: "red", fontSize: "5em"});
});

$("html").on("dragleave", "#heart", function(e) {
    $("#heart").css({color: "", fontSize: ""});
});

$("html").on("dragstart", ".grid-item img", function(e) {
    curDrag =$(e.target);
});

