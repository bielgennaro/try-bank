function validateFields() {
	const emailInput = document.getElementById("email");
	const senhaInput = document.getElementById("senha");
	const recoverPasswordButton = document.getElementById("recover-password");
	const email = emailInput.value;
	const senha = senhaInput.value;

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const isEmailValid = emailRegex.test(email);

	const isSenhaValid = senha.length >= 8;

	recoverPasswordButton.disabled = !isEmailValid;

	const isFormValid = isEmailValid && isSenhaValid;

	return isFormValid;
}

function login() {
	const isFormValid = validateFields();

	if (isFormValid) {
		alert("Login realizado com sucesso!");
	} else {
		alert("Por favor, preencha os campos corretamente.");
	}
}

function recoverPassword() {
	const emailInput = document.getElementById("email");
	const email = emailInput.value;

	alert(
		"Uma solicitação de recuperação de senha foi enviada para o email " +
			email +
			"."
	);
}
