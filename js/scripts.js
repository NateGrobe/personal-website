// open resume
$("#res-button").click(function(){
    window.location.replace('pdf/nate-grobe-resume.pdf');
})

// fade in skills
$(window).scroll(function() {
    var hT = $('#skills').offset().top,
        hH = $('#skills').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS-700 > (hT+hH-wH)){
        $("#skills").fadeIn(1300);
   }
});

// fade in projects
$(window).scroll(function() {
    var hT = $('#projects').offset().top,
        hH = $('#projects').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS-700 > (hT+hH-wH)){
        $("#projects").fadeIn(1300);
   }
});

// fade in contact bar
$(window).scroll(function() {
    var hT = $('#contact').offset().top,
        hH = $('#contact').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS-1400 > (hT+hH-wH)){
        $("#contact").fadeIn(2000);
   }
});

// scroll to skills
$("#skills-link").click(function(event) {
    event.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#skills-pholder").offset().top
    }, 1000);
});

// scroll to projects and show skills
$("#projects-link").click(function(event) {
    event.preventDefault();
    $("#skills").fadeIn(1300);
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects-pholder").offset().top
    }, 1000);
});