// $("button.service-dropdown").on("click", function() {
//     let img = $(this).children("img");
//     let dropdown = $(this).children(".collapse")
//     let toggled = img.attr("data-toggled");
//     console.log(toggled)
//     if(toggled == "false") {
//         img.attr("src", "../../assets/img/chevron-up.svg");
//         img.attr("data-toggled", "true");
//     } else {
//         img.attr("src", "../../assets/img/chevron-down.svg");
//         img.attr("data-toggled", "false");
//     }
// });

$(document).on("show.bs.collapse", function(e) {
    console.log(e.target.id)
    let target = e.target.id
    let siblingSelector = "button[data-target='#" + target + "']"
    $(siblingSelector).children("img").attr("src", "../../assets/img/chevron-up.svg")
})

$(document).on("hide.bs.collapse", function(e) {
    let target = e.target.id
    let siblingSelector = "button[data-target='#" + target + "']"
    $(siblingSelector).children("img").attr("src", "../../assets/img/chevron-down.svg")
})

function setColumnHeight() {
    var colHeight = $(".portfolio-gallery .col-md-4 img").height()
    $(".portfolio-gallery .col-md-8").height(colHeight);
    $(".portfolio-gallery .col-md-4").height(colHeight);
}

$(document).ready(function() {
    setColumnHeight();
    
});

$(window).resize(function() {
    setColumnHeight();
})

function submitContact() {
    var body = {}
    body.name = $("#name").val()
    body.email = $("#email").val()
    body.phonenumber = $("#phonenumber").val()
    body.address = $("#address").val()
    body.message = $("#contactMessage").val()
    if(body.email == "" || body.phonenumber == "") {
        $(".form-valid").removeClass("d-none")
    } else {
        console.log(body);
    }
}

var toggled = false;

// Navbar toggle close icon
$(".navbar-toggler").on("click", function(e) {
    toggled = !toggled;
    if(toggled === true) {
        $(".close").removeClass("d-none");
        $(".fa-bars").addClass("d-none")
    } else {
        $(".close").addClass("d-none");
        $(".fa-bars").removeClass("d-none")
    }
});