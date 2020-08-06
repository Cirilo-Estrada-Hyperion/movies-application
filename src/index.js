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
        // Edit Movie
        $('#edit-button').click(function(){
            let movie_id = $(this).attr("data-id")
         console.log(movie_id);
            $("#movie-id").val(movie_id);
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

$("#add-button").click(() =>{
    postMovie().then(()=>{
        loadData();
    })
})


// /*This patch movie function will edit a single movie within the movie gallery*/

$("#edit-button").click(() =>{
    patchMovie().then(()=>{
        loadData();
    })
})

//
//
// /*This delete movie function will delete a single movie within the movie gallery*/
// deleteMovie()
//     .then(deleteMovie => {
//
//     })
//     .catch(() => console.log("Take it out of the gallery if you don't like it"));
