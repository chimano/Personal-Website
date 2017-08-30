$(document).ready(function () {
    $("a[href^='#']").click(function (e){
        e.preventDefault();
        var target = this.hash;
        $("html, body").animate({
            scrollTop: $(target).offset().top}, 500);


    });
});