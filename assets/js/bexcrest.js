function submitContact() {
    var body = {}
    body.name = $("#name").val()
    body.email = $("#email").val()
    body.phonenumber = $("#phonenumber").val()
    body.address = $("#address").val()
    body.message = $("#contactMessage").val()
    if(body.email == "" ){
        $("#email_valid").removeClass("d-none");
    } 
    if(body.phonenumber == "") {
        $("#phone_valid").removeClass("d-none");
    }
    if(body.phonenumber != "" && body.email != "") {
        $.ajax({
            type: "POST",
            url: "https://www.bexcresthomes.co.uk/script/contact.php",
            data: body
          });
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