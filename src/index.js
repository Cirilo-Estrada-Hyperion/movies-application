/**
 * es6 modules and imports
 */
/*
import sayHello from './hello';

sayHello('World');
*/

/**
 * require style imports
 */

const {getMovies, getMovie, postMovie, patchMovie, deleteMovie} = require('./api.js');

// This gets all the movies
const loadData = () => {
    getMovies().then((movies) => {
        let html = "";
        $('#insertMovie').empty();
        console.log('Here are all the movies:');
        movies.forEach(({title, rating, id, genre}) => {
            console.log(`id#${id} - ${title} - rating: ${rating} - genre: ${genre}`);

            html += "<tr>" +
                "<td>" + title + "</td>" +
                "<td>" + rating + "</td>" +
                "<td>" + genre + "</td>" +
                "</tr>";
        });
        $("#insertMovie").append(html);
    })
        .catch((error) => {
            alert('Oh no! Something went wrong.\nCheck the console for details.')
            console.log(error);
        });
}

loadData();




// This get movie function will grab a single movie id for search functionality
/*
getMovie(1)
    .then(movie => {
      console.log("Making a request to a single movie");
      console.log(`${movie.title} - ${movie.rating} - ${movie.genre}`);
    })
    .catch(() => console.log('The important thing is you tried...'));
*/


/*This post movie function will add a single movie to the movie gallery*/


const addData = () => {

    postMovie()
        .then(addMovie => {


        })


        .catch(() => console.log("Please add a movie"));
}



// /*This patch movie function will edit a single movie within the movie gallery*/
// patchMovie()
//     .then(editMovie => {
//
//     })
//     .catch(() => console.log("Feel free to edit a movie"));
//
//
// /*This delete movie function will delete a single movie within the movie gallery*/
// deleteMovie()
//     .then(deleteMovie => {
//
//     })
//     .catch(() => console.log("Take it out of the gallery if you don't like it"));

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
