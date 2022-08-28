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
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.innerHTML = `<video class="projectPage" src="./videoGif/${i}.mp4" loop autoplay muted></video>`;

    // const container1 = document.querySelector(".container");
    // const secondDiv = document.createElement("div");
    // secondDiv.setAttribute("class", "btnPop");
    // secondDiv.innerText = "view project";
    // container1.appendChild(secondDiv);

    container.onclick = function () {
      showImage(i);
    };
    gallery.appendChild(container);
  }
}

// FUNCTION TO CREATE A MODAL
function showImage(imageNumber) {
  const video = document.createElement("DIV");
  video.setAttribute("class", "divContainVideo");
  video.innerHTML = `<video class="videoModalStyle" src="./videoGif/${imageNumber}.mp4" loop autoplay muted></video>`;

  // create the overlay
  const overlay = document.createElement("DIV");
  overlay.appendChild(video);
  overlay.classList.add("overlay");

  // you can close the modal image just click anywhere
  overlay.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove(); // quita el haber abierto la imagen.
  };
  // modal close botton
  const closeModalBotton = document.createElement("P");
  closeModalBotton.textContent = "X";
  closeModalBotton.classList.add("close-btn");

  //click-to-close action.
  closeModalBotton.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body"); // quita el no poder dar scroll una vez cerrada la imagen
    overlay.remove(); // quita el haber abierto la imagen.
  };

  overlay.appendChild(closeModalBotton);

  //add to html
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}
