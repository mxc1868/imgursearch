
$( window ).scroll(function() {
    if ($("#search").val()) {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(".spinner").removeClass("none");
            $("#searchResult").addClass("semi-opacity");
            $.ajax({
                url: "/result/"+page,
                data: {"q": $("#search").val()},
                success: function(response) {
                    page++;
                    $("#searchResult .grid script").remove();
                    var $res = $(response);
                    $("#searchResult .grid").append($res).masonry("appended", $res);
                    $(".spinner").addClass("none");
                    $("#searchResult").removeClass("semi-opacity");
                },
                error: function() {
                    $(".spinner").addClass("none");
                    $("#searchResult").removeClass("semi-opacity");
                },
                timeout: 3000
            });
        }
    }
});
