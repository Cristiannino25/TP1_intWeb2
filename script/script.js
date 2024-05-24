const validateForm = () => {
  let noError = true;

  // les inputs
  let nomInput = document.getElementById("nom");
  let prenomInput = document.getElementById("prenom");
  let emailInput = document.getElementById("email");
  //les valeurs qu'on veut testé
  const nom = nomInput.value.trim();
  const prenom = prenomInput.value.trim();
  const email = emailInput.value.trim();

  if (nom == "") {
    setError(nomInput, "le nom de l'usager ne peut pas être vide.");
    noError = false;
  } else if (nom.length > 20) {
    setError(
      nomInput,
      "le nom de l'usager ne peut pas dépasser 20 caractères ."
    );
    noError = false;
  } else {
    setSuccess(nomInput);
  }

  if (prenom == "") {
    setError(prenomInput, "le nom de l'usager ne peut pas être vide.");
    noError = false;
  } else if (prenom.length > 20) {
    setError(
      prenomInput,
      "le prenom de l'usager ne peut pas dépasser 20 caractères ."
    );
    noError = false;
  } else {
    setSuccess(prenomInput);
  }

  if (!isValidEmail(email)) {
    setError(emailInput, "le courriel n'est pas valide.");
    noError = false;
  } else {
    setSuccess(emailInput);
  }
  return noError;
};
const setError = (input, message) => {
  const inputControl = input.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (input) => {
  const inputControl = input.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
