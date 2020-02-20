let changes = 0;
document.getElementById("secret1").setAttribute("isValid", false);
document.getElementById("secret2").setAttribute("isValid", false);

function changeThirdDiv() {
  changes++;

  document.getElementById("third").innerHTML =
    "This is the third div tag and it has been changed " +
    changes +
    " time" +
    (changes > 1 ? "s" : "");
}

function changeSecondDivBackground() {
  document.getElementById("second").style.backgroundColor =
    document.getElementById("second").style.backgroundColor === "pink"
      ? "magenta"
      : "pink";
}

function checkPasswords() {
  if (
    document.getElementById("secret1").value.length > 0 &&
    document.getElementById("secret1").value.length ===
      document.getElementById("secret2").value
  ) {
    document.getElementById("secret1").setAttribute("isValid", true);
    document.getElementById("secret2").setAttribute("isValid", true);
  } else {
    document.getElementById("secret1").setAttribute("isValid", false);
    document.getElementById("secret2").setAttribute("isValid", false);
  }
  checkSubmit();
}

function checkSubmit() {
  if (
    document.getElementById("secret1").checkValidity() &&
    document.getElementById("secret2").checkValidity()
  ) {
    document.getElementById("submitButton").disabled = false;
  } else {
    document.getElementById("submitButton").disabled = "disabled";
  }
}
