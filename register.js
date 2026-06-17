document
.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Registration Successful! Thank you for becoming a donor."
    );

    this.reset();

});
