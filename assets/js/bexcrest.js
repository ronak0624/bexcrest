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

// Services dropdown

$('.dropdown-item').click(function(e) {
    console.log(e.target);
})