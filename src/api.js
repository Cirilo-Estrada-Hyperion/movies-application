const $ = require('jquery');

// VARIABLE DECLARATIONS
let selectedMovie = {
  id: 0
};

const getMovies = () => {
  return fetch('/api/movies')
      .then(response => {
        return response.json();
      });
};

const displayAllMovies = () => {
  getMovies().then((movies) => {
    $('.movie-list').html(createMovieString(movies));
    activateMovieList();
    Promise.resolve().then(response => "Success: " + response);
  }).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
  });
};

  module.exports = {
    selectedMovie,
    getMovies,
    displayAllMovies,
    createMovieString,
    addMovie,
    editMovie,
    deleteMovie,
    searchMovies,
    renderSearchResults,
    toggleDisable,
    renderLoading
};
