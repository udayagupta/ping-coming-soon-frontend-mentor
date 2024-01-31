function validateForm() {
    var email = document.getElementById("email");
    var span = document.querySelector(".invalid-email");


    if (!email.validity.valid && email.value !== "") {
        span.classList.toggle("hidden")
        email.classList.toggle("invalid-status")
        return false
    }

    else {
        
        return true
    }

}
