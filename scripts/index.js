$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar").css("background", "blue");
        }

        else {
            $(".navbar").css("background", "#333");
        }
    })
})

