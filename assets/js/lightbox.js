$(".carousel-item").on("click", function() {
    let image = $(this).children("img").attr("src");
    console.log(image)
    openLightbox(image);
});

// $("#lightbox svg").on("click", function() {
//     closeLightbox();
// });

$("#lightbox").on("click", function(event) {
    if(event.target.tagName !== "IMG") {
        closeLightbox();
    }
});

// pre: Takes string for input to open
// post: Opens lightbox with given image
function openLightbox(source) {
    $("#lightbox img").attr("src", source);
    $("#lightbox").removeClass("d-none");
}

function closeLightbox() {
    $("#lightbox").addClass("d-none");
}