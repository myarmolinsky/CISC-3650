let changes = 0;

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

function alphanumericOnly() {
  document.getElementById("username").innerHTML = document
    .getElementById("username")
    .innerHTML.split("")
    .filter(
      char =>
        (char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58) ||
        (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) ||
        (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
    )
    .join("");
}

function checkPasswords() {
  if (
    document.getElementById("secret1").innerHTML ===
    document.getElementById("secret2").innerHTML
  ) {
    document.getElementById("secret1").style.backgroundcolor = "orange";
    document.getElementById("secret2").style.backgroundcolor = "orange";
  } else {
    document.getElementById("secret1").style.backgroundColor = "cyan";
    document.getElementById("secret2").style.backgroundcolor = "cyan";
  }
}

// function checkSubmit() {
//   if (
//     document.getElementById("secret1").innerHTML.length > 0 &&
//     document.getElementById("secret1").innerHTML.length > 0
//   ) {
//     document.getElementById("submitButton").disabled = false;
//   } else {
//     document.getElementById("submitButton").disabled = true;
//   }
// }
