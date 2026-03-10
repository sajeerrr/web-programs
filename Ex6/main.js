function validateform() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value.trim();
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;

    let emailpattern = /^[^ ]+@[^ }+\.[a-z]{2,3}$/;

    //name validation
    if(name === ""){
        alert("Name cannot be empty");
        return false;
    }

    //email validation
    if(!email.match(emailpattern)){
        alert("Please enter a valid Email");
        return false;
    }

    
}