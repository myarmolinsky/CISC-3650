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

function checkPasswords() {
  if (
    document.getElementById("secret1").value ===
    document.getElementById("secret2").value
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
