$(".collapse").on("show.bs.collapse", function() {
    let img = $(this).siblings('.service-dropdown').children("img");
    img.attr("src", "../../assets/img/chevron-up.svg")
});

$(".collapse").on("hide.bs.collapse", function() {
    let img = $(this).siblings('.service-dropdown').children('img');
    img.attr("src", "../../assets/img/chevron-down.svg")
});