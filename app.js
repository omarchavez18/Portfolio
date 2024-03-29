//ARRAY OF OBJECTS WITH THE INFO OF EACH PROJECT
const arrayProjects = [
  {
    name: 'Nasa Project',
    description:
      'On this website you can access the official NASA API information, it returns de images of the day, mars rover photos, a collection of cards with planets info with a filter, and information about the first moon landing of Apollo 11.',
    video: 7,
    technologies: ['HTML, SCSS-modules, Bootstrap, React, router, Netlify,'],
    liveDemo: 'https://nasaprojectreact.netlify.app/',
    repository: 'https://github.com/omarchavez18/nasaProject',
  },
  {
    name: 'MoviesApp',
    description:
      'Movies App that return movies,series and trends with access to trailers, all the data comes from an TMDB api.',
    video: 4,
    technologies: ['HTML, CSS, JAVASCRIPT, REACT.'],
    liveDemo: 'https://moviesapptmdb.netlify.app/',
    repository: 'https://github.com/omarchavez18/MovieApp',
  },
  {
    name: 'Aloha Surf',
    description:
      'This project is a small web page about a surfboard shop, the purpose of the project is the implementation of webpack.',
    video: 6,
    technologies: ['HTML, CSS, JAVASCRIPT, WEBPACK.'],
    liveDemo: 'https://omarchavez18.github.io/AlohaSurf/',
    repository: 'https://github.com/omarchavez18/AlohaSurf',
  },
  {
    name: 'Hunting App',
    description:
      'Hunting page about the season, zone, type, price, and animal stats, the app show you all the animals if you want a big or small game, available animals by season, by country, or by price.',
    video: 1,
    technologies: [
      'HTML, SCSS, BOOTSTRAP, JAVASCRIPT, HEROKU, JEST, EXPRESS, NODE JS, POSTMAN.',
    ],
    liveDemo: 'https://omarchavez18.github.io/Hunting-App/',
    repository: 'https://github.com/omarchavez18/Hunting-App',
  },
  {
    name: 'PokeAPI',
    description:
      'In this project I developed a pokedex with the original design of Pokémon first generation using the pokemon API to search all 890 pokemons using the ID or the name of each one to return their statistics.',
    video: 2,
    technologies: ['HTML, CSS, JAVASCRIPT.'],
    liveDemo: 'https://omarchavez18.github.io/PokeApi-Microsoft-Launch-X/',
    repository: 'https://github.com/omarchavez18/PokeApi-Microsoft-Launch-X',
  },
  {
    name: 'EDM Festival',
    description:
      'This project is about a landing page for an EDM festival, in this page, you can see a gallery of photos, the lineup for all the artists, and the tickets price for both days.',
    video: 3,
    technologies: ['HTML, SCSS, JAVASCRIPT.'],
    liveDemo: 'https://omarchavez18.github.io/festival-de-musica/',
    repository: 'https://github.com/omarchavez18/festival-de-musica',
  },
]

//MENU BTN
toggle = document.querySelectorAll('.toggle')[0]
nav = document.querySelectorAll('nav')[0]
toggle_open_text = 'Menu'
toggle_close_text = 'Close'

toggle.addEventListener(
  'click',
  function () {
    nav.classList.toggle('open')

    if (nav.classList.contains('open')) {
      toggle.innerHTML = toggle_close_text
    } else {
      toggle.innerHTML = toggle_open_text
    }
  },
  false
)

setTimeout(function () {
  nav.classList.toggle('open')
}, 800)

// FUNCTION TO CREATE A GALLERY
document.addEventListener('DOMContentLoaded', function () {
  RunApp()
})

function RunApp() {
  createGallery()
}

function createGallery() {
  const gallery = document.querySelector('.project')

  // FOR THIS SECTION THE NAME OF YOUR IMAGES MOST BE NUMBERS = 1,2,3,4,5,6 ETC...

  arrayProjects.map((project) => {
    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    container.innerHTML = `<video class="projectPage" src="./videoGif/${project.video}.mp4" loop autoplay muted></video>`
    // create view project btn
    const secondDiv = document.createElement('div')
    secondDiv.setAttribute('class', 'btnPop')
    secondDiv.innerText = 'view project'
    container.appendChild(secondDiv)
    secondDiv.onclick = function () {
      showModal(project)
    }
    gallery.appendChild(container)
  })
}

// FUNCTION TO CREATE A MODAL
function showModal(project) {
  const modal = document.createElement('DIV')
  modal.setAttribute('class', 'divContainVideo')
  modal.innerHTML = `<video class="videoModalStyle" src="./videoGif/${project.video}.mp4" loop autoplay muted></video>`

  const newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'modalDiv')
  newDiv.innerHTML = `<p>${project.name} <br> <br> ${project.description}</p>`
  modal.appendChild(newDiv)

  const technologies = document.createElement('DIV')
  technologies.innerHTML = `<p>${project.technologies}</p> <br>`
  newDiv.appendChild(technologies)

  const btnPageDiv = document.createElement('div')
  btnPageDiv.setAttribute('class', 'btnPageDiv')

  const btnPage = document.createElement('button')
  btnPage.setAttribute('class', 'btnPage')
  btnPage.innerHTML = `<a  href="${project.liveDemo}" target= "_blank"><p> View Website</p></a>`

  btnPageDiv.appendChild(btnPage)

  const btnCode = document.createElement('button')
  btnCode.setAttribute('class', 'btnPage')
  btnCode.innerHTML = `<a  href="${project.repository}" target= "_blank"><p>View Code</p></a>`

  btnPageDiv.appendChild(btnCode)

  newDiv.appendChild(btnPageDiv)
  // newDiv.appendChild(btnPage);
  // newDiv.appendChild(btnCode);

  // create the overlay
  const overlay = document.createElement('DIV')
  overlay.appendChild(modal)
  overlay.classList.add('overlay')

  // you can close the modal image just click anywhere
  overlay.onclick = function () {
    const body = document.querySelector('body')
    body.classList.remove('fijar-body')
    overlay.remove() // quita el haber abierto la imagen.
  }
  // modal close botton
  const closeModalBotton = document.createElement('P')
  closeModalBotton.textContent = 'X'
  closeModalBotton.classList.add('close-btn')

  //click-to-close action.
  closeModalBotton.onclick = function () {
    const body = document.querySelector('body')
    body.classList.remove('fijar-body') // quita el no poder dar scroll una vez cerrada la imagen
    overlay.remove() // quita el haber abierto la imagen.
  }

  overlay.appendChild(closeModalBotton)

  //add to html
  const body = document.querySelector('body')
  body.appendChild(overlay)
  body.classList.add('fijar-body')
}
