//console.log("Hello Word");
let firstName = document.getElementById("first_name").value;
let lastName = document.getElementById("last_name").value;
let email = document.getElementById("email_address").value;
let password = document.getElementById("password").value;
let errorMessage = document.getElementsByClassName("error_message");
let btn = document.getElementsByClassName("button")[0];

btn.addEventListener("click", function () {
	errorMessage[0].style.display = "block";
	errorMessage[1].style.display = "block";
	errorMessage[2].style.display = "block";
	errorMessage[3].style.display = "block";
});
