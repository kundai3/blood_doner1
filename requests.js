document
.getElementById("requestForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Blood Request Submitted Successfully"
    );

    this.reset();

});
