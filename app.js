//ARRAY OF OBJECTS WITH THE INFO OF EACH PROJECT
const arrayProjects = [
  {
    name: "hunting app",
    description: "este es mi proyecto de caza",
    video: 1,
    technologies: [
      "javascript",
      "html",
      "scss, heroku, jest, express, node js, postman ",
    ],
    liveDemo: "https://omarchavez18.github.io/Hunting-App/",
    repository: "https://github.com/omarchavez18/Hunting-App",
  },
  {
    name: "PokeApi",
    description: "este es mi proyecto de pokeApi",
    video: 2,
    technologies: ["javascript", "html", "css"],
    liveDemo: "https://omarchavez18.github.io/PokeApi-Microsoft-Launch-X/",
    repository: "https://github.com/omarchavez18/PokeApi-Microsoft-Launch-X",
  },
  {
    name: "EDM festival",
    description: "este es mi proyecto de EDM festival",
    video: 3,
    technologies: ["javascript", "html", "scss"],
    liveDemo: "https://omarchavez18.github.io/festival-de-musica/",
    repository: "https://github.com/omarchavez18/festival-de-musica",
  },
  {
    name: "Vaccines",
    description: "este es mi proyecto de clon de pagina de vacunacion ",
    video: 4,
    technologies: ["html", "scss"],
    liveDemo:
      "https://omarchavez18.github.io/FrontEnd-Mission-CSS-Microsoft-Launch-X/",
    repository:
      "https://github.com/omarchavez18/FrontEnd-Mission-CSS-Microsoft-Launch-X",
  },
  {
    name: "TNW",
    description: "este es mi proyecto de clon de pagina de noticias TNW",
    video: 5,
    technologies: ["html", "css"],
    liveDemo: "https://omarchavez18.github.io/TNW-proyect/",
    repository: "https://github.com/omarchavez18/TNW-proyect",
  },
  {
    name: "Coffee blog",
    description: "este es mi proyecto de blog de cafe",
    video: 6,
    technologies: ["html", "css"],
    liveDemo: "https://omarchavez18.github.io/coffee-blog/",
    repository: "https://github.com/omarchavez18/coffee-blog",
  },
];

//MENU BTN
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

  arrayProjects.map((proyecto) => {
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.innerHTML = `<video class="projectPage" src="./videoGif/${proyecto.video}.mp4" loop autoplay muted></video>`;
    // create view project btn
    const secondDiv = document.createElement("div");
    secondDiv.setAttribute("class", "btnPop");
    secondDiv.innerText = "view project";
    container.appendChild(secondDiv);
    container.onclick = function () {
      showModal(proyecto);
    };
    gallery.appendChild(container);
  });
}

// FUNCTION TO CREATE A MODAL
function showModal(proyecto) {
  const video = document.createElement("DIV");
  video.setAttribute("class", "divContainVideo flex2Columns");
  video.innerHTML = `<video class="videoModalStyle" src="./videoGif/${proyecto.video}.mp4" loop autoplay muted></video>`;
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "modalDiv");
  newDiv.innerHTML = `<p>${proyecto.description}</p>`;
  video.appendChild(newDiv);

  const btnPage = document.createElement("button");
  btnPage.setAttribute("class", "btnPage");
  btnPage.innerHTML = `<a  href="${proyecto.liveDemo}" target= "_blank"><p> View Website</p></a>`;
  const btnCode = document.createElement("button");
  btnCode.setAttribute("class", "btnPage");
  btnCode.innerHTML = `<a  href="${proyecto.repository}" target= "_blank"><p>View Code</p></a>`;

  newDiv.appendChild(btnPage);
  newDiv.appendChild(btnCode);

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
