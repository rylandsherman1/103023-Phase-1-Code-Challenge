const movieAPI = 'http://localhost:3000';

const moviePoster = el('poster');
const movieTitle = el('title');
const movieRuntime = el('runtime');
const movieShowtime = el('showtime');
const movieTickets = el('ticket-num');
const movieDescription = el('film-info');
const movieList = el('films');

el('buy-ticket').addEventListener('click', buyTicket);

fetch(`${movieAPI}/1`)
    .then(res => res.json())
    .then(renderMovie)

fetch(`${movieAPI}`)
    .then(res => res.json())
    .then(renderMovieList)

function renderMovieList(movies) {
    movieList.innerHTML = '';
    movies.forEach(renderList);
}

function renderMovie(movie) {
    movieTitle.textContent = movie.title; 
    moviePoster.src = movie.poster;  
    movieRuntime.textContent = `${movie.runtime} minutes`;  
    movieShowtime.textContent = movie.showtime;  
}

function renderList(movie) {
    const movieLi = document.createElement('li'); 
    movieLi.textContent = movie.title;
    movieLi.addEventListener('click', () => renderMovie(movie)); 
    movieList.append(movieLi);
}

function buyTicket() {
    const availableTicketsElement = document.getElementById('ticket-num');
    let availableTickets = parseInt(availableTicketsElement.textContent);
  
    if (availableTickets > 0) {
      availableTickets--;
      availableTicketsElement.textContent = availableTickets;
    }
}

function el(id) {
    return document.getElementById(id);
}


