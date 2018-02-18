$(document).ready(function(){
    $('.homepageMenu').onmouseover(function(){
        $(this).css("color", "#fff");

    });

});


$(document).ready(function(){
    $("#aboutMenu").onclick(function(){
        $('a[href*=#]').scrolling.show();
    });
});

$(document).ready(function(){
    $("#contactMenu").onclick(function(){
        $('a[href*=#]').show();
    });
});