let firstName = document.getElementById("first_name").value;
let lastName = document.getElementById("last_name").value;
let emailAddress = document.getElementById("email_address").value;
let password = document.getElementById("password").value;
let errorMessage = document.getElementsByClassName("error_message");
let btn = document.getElementsByClassName("button")[0];

const validateFirstName = () => {
	if (firstName) {
		document.getElementById("first_name").style.border =
			"2px solid  hsl(154, 59%, 51%)";
		errorMessage[0].style.display = "none";
	} else {
		document.getElementById("first_name").style.border =
			"2px solid hsl(0, 100%, 74%)";
		errorMessage[0].style.display = "block";
	}
};

const validateLastName = () => {
	if (lastName) {
		document.getElementById("last_name").style.border =
			"2px solid  hsl(154, 59%, 51%)";
		errorMessage[1].style.display = "none";
	} else {
		document.getElementById("last_name").style.border =
			"2px solid hsl(0, 100%, 74%)";
		errorMessage[1].style.display = "block";
	}
};

const validateEmailAddress = () => {
	const EMAILPATTERN = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
	if (EMAILPATTERN.test(emailAddress)) {
		document.getElementById("email_address").style.border =
			"2px solid  hsl(154, 59%, 51%)";
		errorMessage[2].style.display = "none";
	} else {
		document.getElementById("email_address").style.border =
			"2px solid hsl(0, 100%, 74%)";
		errorMessage[2].style.display = "block";
	}
};

const validatePassword = () => {
	if (password) {
		document.getElementById("email_address").style.border =
			"2px solid  hsl(154, 59%, 51%)";
		errorMessage[3].style.display = "block";
	} else {
		document.getElementById("password").style.border =
			"2px solid hsl(0, 100%, 74%)";
		errorMessage[3].style.display = "block";
	}
};

function formValidation() {
	validateFirstName();
	validateLastName();
	validateEmailAddress();
	validatePassword();
}

btn.addEventListener("click", formValidation);
