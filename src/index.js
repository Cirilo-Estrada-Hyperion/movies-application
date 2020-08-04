/**
 * es6 modules and imports
 */
/*import sayHello from './hello';

sayHello('World');*/

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

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
