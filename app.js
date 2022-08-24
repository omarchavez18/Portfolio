toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll("nav")[0];
toggle_open_text = "Menu";
toggle_close_text = "Close";

toggle.addEventListener(
  "click",
  function () {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
      toggle.innerHTML = toggle_close_text;
    } else {
      toggle.innerHTML = toggle_open_text;
    }
  },
  false
);

setTimeout(function () {
  nav.classList.toggle("open");
}, 800);

// FUNCTION TO CREATE A GALLERY
document.addEventListener("DOMContentLoaded", function () {
  RunApp();
});

function RunApp() {
  createGallery();
}

function createGallery() {
  const gallery = document.querySelector(".project");

  // FOR THIS SECTION THE NAME OF YOUR IMAGES MOST BE NUMBERS = 1,2,3,4,5,6 ETC...
  for (let i = 1; i <= 6; i++) {
    const image = document.createElement("picture");
    image.setAttribute("id", "imageId");
    image.innerHTML = `<img class="projectPage" src="./images/${i}.png" />`;
    gallery.appendChild(image);
  }
}

const imageId = document.getElementById("imageId");
imageId.addEventListener("mouseover", projectBtn());

function projectBtn() {
  const createBtn = document.createElement("div");
  createBtn.innerText = "View Project";
  imageId.appendChild(createBtn);
}
