$(document).ready(function() {
    scrollToSection();
});

$(".dropdown-item").on("click", function() {
    scrollToSection();
});


function scrollToSection() {
    let id = window.location.href.split("#")[1];
    console.log(id)
}