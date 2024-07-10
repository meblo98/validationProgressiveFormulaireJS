const form = document.getElementById("myForm");
const inputs = form.querySelectorAll("input");
const submitButton = form.querySelector('input[type="submit"]');
const errorSpans = form.querySelectorAll("span");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    validateInput(input, index);
  });
  if (index > 0) {
    input.disabled = true;
  }
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateForm()) {
    // Si le formulaire est valide, on peut soumettre
    form.submit();
  }
});

function validateInput(input, index) {
  const inputValue = input.value.trim();
  const inputId = input.id;
  const errorSpan = document.getElementById(`${inputId}Error`);

  switch (inputId) {
    case "prenom":
      if (inputValue.length < 2) {
        errorSpan.textContent = "Le prénom doit avoir au moins 2 caractères";
        input.classList.add("is-invalid");
        inputs[1].disabled = true;
        return false;
      } else {
        errorSpan.textContent = "";
        input.classList.remove("is-invalid");
        inputs[1].disabled = false;
        return true;
      }
    case "nom":
      if (inputValue.length < 2) {
        errorSpan.textContent = "Le nom doit avoir au moins 2 caractères";
        input.classList.add("is-invalid");
        inputs[2].disabled = true;
        return false;
      } else {
        errorSpan.textContent = "";
        input.classList.remove("is-invalid");
        inputs[2].disabled = false;
        return true;
      }
    case "email":
      if (!isValidEmail(inputValue)) {
        errorSpan.textContent = "L'email est invalide";
        input.classList.add("is-invalid");
        inputs[3].disabled = true;
        return false;
      } else {
        errorSpan.textContent = "";
        input.classList.remove("is-invalid");
        inputs[3].disabled = false;
        return true;
      }
    case "password":
      if (inputValue.length < 8) {
        errorSpan.textContent =
          "Le mot de passe doit avoir au moins 8 caractères";
        input.classList.add("is-invalid");
        submitButton.disabled = true;
        return false;
      } else {
        errorSpan.textContent = "";
        input.classList.remove("is-invalid");
        submitButton.disabled = false;
        return true;
      }
    default:
      return true;
  }
}

function validateForm() {
  let isValid = true;
  inputs.forEach((input) => {
    if (!validateInput(input)) {
      isValid = false;
    }
  });
  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
