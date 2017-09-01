var timer;
var page = 2;
$(document).ready(function(){
    $(this).scrollTop(0);
    $("#search").val(getUrlVars().q);
});

$("#search").keyup(function() {
    var input = $("#search").val();
    window.clearTimeout(timer);
    timer = window.setTimeout(function(){
        $(location).attr('href','/show?q='+$("#search").val());
        $("body").scrollTop(0);
        $.ajax({
            url: "/result/1",
            data: {"q": $("#search").val()},
            success: function(response) {
                $("#searchResult .grid").html(response);
            },
        });
    },500); 
});


function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}