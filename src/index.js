/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */

const {getMovies, getMovie, postMovie, patchMovie, deleteMovie} = require('./api.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id, genre}) => {
    console.log(`id#${id} - ${title} - rating: ${rating} - genre: ${genre}`);

  });
})
    .catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});

getMovie(1)
    .then(movie => {
      console.log("Making a request to a single movie");
      console.log(`${movie.title} - ${movie.rating} - ${movie.genre}`);
    })
    .catch(() => console.log('The important thing is you tried...'));


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
