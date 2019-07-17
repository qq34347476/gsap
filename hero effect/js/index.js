(function() {
    $(window).scroll(function() {
        var Num = $(window).scrollTop() / 1000;
        var Num2 = $(window).scrollTop() * .0014; // higher number for larger scaling BG
        var Num2mod = Num2 + 1;
        var Num3 = $(window).scrollTop() * .2; // speed of title scroll
        var Num3mod = Num3 + 1;
        return $('.shade').css('opacity', Num),
            $(".bg").css({ "transform": "scale(" + Num2mod + ")" }),
            $(".text").css({ "margin-top": "-" + Num3mod + "px" });
    });
}.call(this));