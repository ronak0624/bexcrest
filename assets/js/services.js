var services = [
    "Architectural Services",
    "Notices & Agreements",
    "Building Contractor",
    "Project Management",
    "Landscaping Services",
]

var current = 0;
var next = 1;
var prev = -1;

$('.header-carousel span').on("click", function(e) {
    let direction = e.target.className.split("my-auto ")[1]

    if(direction === "next") {
        if(next < services.length) {
            prev = current;
            current = next;
            next++;
        }
    }

    if(direction === "previous") {
        if(prev >= 0) {
            next = current;
            current = prev;
            prev--;
        }
    }

    var previousHtml = $(".header-carousel .previous")
    var currentHtml = $(".header-carousel h1")
    var nextHtml = $(".header-carousel .next")

    if(prev === -1) {
        previousHtml.text("");
    }

    if(next >= services.length) {
        nextHtml.text("")
    }

    if(next <= services.length && prev >= -1) {
        previousHtml.text(services[prev])
        currentHtml.text(services[current])
        nextHtml.text(services[next])
        console.log(services[prev], services[current], services[next])
    }

});