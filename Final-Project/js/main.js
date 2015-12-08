$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 143
    });
});

// when page loads, get url fragment from end of url
// if that equals "contact", for example, use jQuery scrollTo that 
// hash: #contact
