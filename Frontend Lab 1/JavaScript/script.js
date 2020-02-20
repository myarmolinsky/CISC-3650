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

let valid = false;
function checkSubmit() {
  console.log("worked");
  valid = checkPasswords();
  if (
    document.getElementById("dragPokemonDiv1").firstElementChild !== null &&
    document.getElementById("dragPokemonDiv1").firstElementChild.id ===
      "pokemon2" &&
    valid
  ) {
    console.log("enabled");
    document.getElementById("submitButton").disabled = false;
  } else {
    console.log("disabled");
    document.getElementById("submitButton").disabled = "disabled";
  }
}

function checkPasswords() {
  console.log("called");
  if (
    document.getElementById("favPoke1").value != "" &&
    document.getElementById("favPoke1").value ==
      document.getElementById("favPoke2").value
  ) {
    document.getElementById("favPoke1").style = "background-color: green;";
    document.getElementById("favPoke2").style = "background-color: green;";
    document.getElementById("passwordsMatch").innerHTML =
      "The Pokemon you have entered match!";
    return true;
  } else {
    document.getElementById("favPoke1").style = "background-color: red;";
    document.getElementById("favPoke2").style = "background-color: red;";
    document.getElementById("passwordsMatch").innerHTML =
      "The Pokemon you have entered don't match, they must match to be able to submit this form";
    return false;
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function shiftSlide(n) {
  showSlides((slideIndex += n));
}

function changeSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function toggleAudio() {
  if (
    document.getElementById("audioDiv").firstElementChild !== null &&
    document.getElementById("audioDiv").firstElementChild.tagName === "audio"
  ) {
    document.getElementById("audioDiv").innerHTML =
      '<audio><source src="../Resources/Relaxing Pokémon Music Compilation.mp3" type="audio/mpeg"/></audio>';
  } else {
    document.getElementById("audioDiv").innerHTML = "";
  }
}

var theme = true;
function toggleTheme() {
  theme = !theme;
  if (theme) {
    document.getElementById("theme").innerHTML =
      "You are currently using light theme, click the button below to switch to dark theme";
    document.body.style = "background-color: skyblue;";
    document.getElementById("theme").style =
      "background-color: cornflowerblue; border-radius: 5px; display: inline;";
  } else {
    document.getElementById("theme").innerHTML =
      "You are currently using dark theme, click the button below to switch to light theme";
    document.body.style = "background-color: black; color: lightgray";
    document.getElementById("theme").style =
      "background-color: navy; border-radius: 5px; display: inline;";
  }
}

function checkRating() {
  document.getElementById("rating").innerHTML = document.getElementById(
    "rater"
  ).value;
}

function initOurMap() {
  var here = { lat: 40.6305, lng: 73.9521 };
  var map = new google.maps.Map(document.getElementById("ourLocation"), {
    zoom: 4,
    center: here
  });
  var marker = new google.maps.Marker({ position: here, map: map });
}
