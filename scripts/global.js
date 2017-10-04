// Easing equation, borrowed from jQuery easing plugin
// http://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing.easeOutQuart = function (x, t, b, c, d) {
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

$(function() {
   topNav();
   tableRowClasses()
});

function topNav() {
    var fullpath = window.location.href;
    var homePageCheck = $('h1:eq(0)').text();
    var homeLinkCheck = $('li.menu:eq(0) a.menu-link span').text();

    if ((homePageCheck == "Home") && (homeLinkCheck == "Home")) {
        $('li.menu:eq(0) a.menu-link').addClass('current');
    } else {
    $('li.menu').each(function() {
        var href = $(this).children('a.menu-link').attr('href');
        var homeLinkText = $(this).children('a.menu-link').children('span').text();

        if ((fullpath.indexOf(href) == 0) && (homeLinkText != "Home")) {
            $(this).children('a.menu-link').addClass('current');
            $(this).prev().children('a.menu-link').addClass('current-adjacent');
        } 
    });
    }   

    $('li.menu').mouseover(function() {
        $(this).prev().each(function() {
            $(this).children('a.menu-link').addClass('adjacent');
        });
        $(this).children('a.menu-link').addClass('adjacent');
    });

    $('li.menu').mouseout(function() {
        $(this).prev().each(function() {
            $(this).children('a.menu-link').removeClass('adjacent');
        });
        $(this).children('a.menu-link').removeClass('adjacent');
    });
}


function tableRowClasses(){
    $("#middle-col table").each(function(){
        var columns = $(this).find('thead tr:first-child').children().length;

        $(this).find('tbody > tr').filter(function() {
            return $(this).children().length == columns;
        }).filter(':odd').addClass('odd');

        $('tr.odd td[rowspan]').each(function() {
            $(this).parent().nextAll().slice(0, this.rowSpan - 1).addClass('odd');
        });
    });
    $("#middle-col table th:last-child").addClass('last');
}

