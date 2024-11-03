let validate = () => {
	// Fill in the necessary validation here
	let name = document.getElementById("Name")
	if (name.value.length !== 0){
		//not empty
		name.classList = "form-control"
		document.getElementById("NameValidation").classList = "d-none text-danger"
	}
	else {
		//empty
		document.getElementById("NameValidation").classList = "text-danger"
	}
}

	// Fill in the necessary validation here
	let sigma = document.getElementById("email")
	if (sigma.value.length !== 0){
		//not empty
		sigma.classList = "form-control"
		document.getElementById("EmailValidation").classList = "d-none text-danger"
	}
	else {
		//empty
		document.getElementById("EmailValidation").classList = "text-danger"
	}
	let emotionalDamage = document.getElementById("email")
	if (emotionalDamage.value.length !== 0){
		//not empty
		emotionalDamage.classList = "form-control"
		document.getElementById("Subject1Validation").classList = "d-none text-danger"
	}
	else {
		//empty
		document.getElementById("Subject1Validation").classList = "text-danger"
	}
	let ewwBrotherEww = document.getElementById("subject1")
	if (ewwBrotherEww.value.length !== 0){
		//not empty
		ewwBrotherEww.classList = "form-control"
		document.getElementById("Subject1Validation").classList = "d-none text-danger"
	}
	else {
		//empty
		document.getElementById("Subject1Validation").classList = "text-danger"
	}
