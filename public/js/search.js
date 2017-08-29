var timer;
var page = 1;
$(document).ready(function(){
    $(this).scrollTop(0);
});

$("#search").keyup(function() {
    var input = $("#search").val();
    window.clearTimeout(timer);
    timer = window.setTimeout(function(){
        page = 1;
        $("body").scrollTop(0);
        $.ajax({
            url: "/result/"+page,
            data: {"name": $("#search").val()},
            success: function(response) {
                $("#searchResult .columns").html(response);
            },
        });
    },500); 
});


$( window ).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        page++;
        $.ajax({
            url: "/result/"+page,
            data: {"name": $("#search").val()},
            success: function(response) {
                $("#searchResult .columns").append(response);
            },
        });
    }
});