//allows jquery to be used
// const $ = require('jquery');


/**
 * es6 modules and imports
 */
/*import sayHello from './hello';

sayHello('World');*/

/**
 * require style imports
 */
//
// const {getMovies} = require('./api.js');
//
// getMovies().then((movies) => {
//   // console.log('Here are all the movies:');
//   movies.forEach(({title, rating, id, genre}) => {
//     // console.log(`id#${id} - ${title} - rating: ${rating} - genre: ${genre}`);
//
//   });
//
//
// })
//     .catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.')
//   console.log(error);
// });

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





/*const url = './api.js';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(movies),
};
fetch(url, options)
    .then((movies) => {
      movies.forEach (({title, rating, id, genre}) => {

      })
    })
    .catch();*/


/*
const movie = { new movie info (title, rating, id, genre)};
const url = '/api/movies';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(movie),
};
fetch(url, options)
    .then(/!* post was created successfully *!/)
    .catch(/!* handle errors *!/);
*/
