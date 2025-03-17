import { API_KEY } from './config.js'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query='`
const form = document.querySelector("#form")
const search = document.querySelector("#search")
// get initial movies
// getMovies(API_URL)

async function getMovies(url) {
  const response = await fetch(url)
  const data = await response.json()
  showMovies(data.results)
}
function showMovies(movies) {
  const main = document.querySelector("#main")
  main.innerHTML = ''
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie
    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    
    // Create and set content safely
    const movieContent = document.createElement('div')
    
    // Create image element safely
    const img = document.createElement('img')
    img.src = IMG_PATH + poster_path
    img.alt = title
    movieContent.appendChild(img)
    
    // Create movie info div safely
    const movieInfo = document.createElement('div')
    movieInfo.className = 'movie-info'
    
    const h3 = document.createElement('h3')
    h3.textContent = title
    movieInfo.appendChild(h3)
    
    const span = document.createElement('span')
    span.className = getClassByRate(vote_average)
    span.textContent = vote_average
    movieInfo.appendChild(span)
    movieContent.appendChild(movieInfo)
    
    // Create overview div safely
    const overviewDiv = document.createElement('div')
    overviewDiv.className = 'overview'
    const overviewTitle = document.createElement('h3')
    overviewTitle.textContent = 'Overview'
    overviewDiv.appendChild(overviewTitle)
    overviewDiv.appendChild(document.createTextNode(overview))
    movieContent.appendChild(overviewDiv)
    
    movieEl.appendChild(movieContent)
    main.appendChild(movieEl)
  })
}
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green"
  } else if (vote >= 5) {
    return "orange"
  } else {
    return "red"
  }
}

form.addEventListener('submit',
  (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') { getMovies(SEARCH_API + searchTerm); search.value = '' } else { window.location.reload() }
  }
)