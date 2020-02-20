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
