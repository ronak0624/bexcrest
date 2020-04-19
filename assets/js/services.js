$(document).on("show.bs.collapse", function(e) {
    console.log(e.target.id)
    let target = e.target.id
    let siblingSelector = "button[data-target='#" + target + "']"
    $(siblingSelector).children("img").attr("src", "../assets/img/chevron-up.svg")
})

$(document).on("hide.bs.collapse", function(e) {
    let target = e.target.id
    let siblingSelector = "button[data-target='#" + target + "']"
    $(siblingSelector).children("img").attr("src", "../assets/img/chevron-down.svg")
})

$('.headers').slick({
    arrows: true,
    // centerMode: true,
    infinite: false,
    asNavFor: '.content',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            // centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            // centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
});

$('.content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.headers',
    infinite: false,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    appendDots: '.carousel-dots'
});

