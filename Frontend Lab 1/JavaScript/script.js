function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

function checkSubmit() {
  console.log("worked");
  if (
    document.getElementById("dragPokemonDiv1").firstElementChild !== null &&
    document.getElementById("dragPokemonDiv1").firstElementChild.id ===
      "pokemon2"
  ) {
    console.log("enabled");
    document.getElementById("submitButton").disabled = false;
  } else {
    console.log("disabled");
    document.getElementById("submitButton").disabled = "disabled";
  }
}
