$(document).ready(function () {
    anime({
        targets: '.hero .stagger',
        translateY: -40,
        delay: anime.stagger(300, {
            from: 'first', 
        }), 
        opacity: [0, 1],
        easing: 'spring(1, 80, 10, 0)'
    });

    anime({
        targets: '.chevron',
        translateY: 10,
        loop: true,
        direction: 'alternate',
        easing: 'easeInQuad'
    });
    homeCarousel();
});

function homeCarousel() {
    let imageList = ["url('../assets/img/portfolio/thornhill/kitchen-diner.jpg')", 
    "url('../assets/img/portfolio/thornhill/front.jpg')", 
    "url('../assets/img/portfolio/thornhill/living-room.jpg')", 
    "url('../assets/img/portfolio/rye/4.png')", 
    "url('../assets/img/portfolio/rye/1.png')"];

    let carousel = $(".hero-bg");
    let index = 1;

    setInterval(function() {

        if(index >= imageList.length) {
            index = 0;
        }
        carousel.fadeOut(400, function(){
            carousel.css("background-image", imageList[index]).fadeIn(400);
        });


        index++;

    }, 6000);

}