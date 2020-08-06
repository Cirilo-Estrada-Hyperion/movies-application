module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
        .then(response => response.json());
  },
  getMovie : (id) => {
    return fetch(`/api/movies/${id}`)
        .then(resp => resp.json());
  },
  /*This function creates new movies*/

  postMovie : () => {
    let movieTitle = $("#add-title").val();
    let movieRating = $("#add-rating").val();
    let movieGenre = $("#add-genre").val();
    const movieData = {title: movieTitle, rating: movieRating, genre: movieGenre};
    return fetch('api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieData),
    })
  },



  /*This function edits movies*/
  patchMovie : () => {
    let editTitle = $("#edit-title").val();
    let editRating = $("#edit-rating").val();
    let editGenre = $("#edit-genre").val();
    let movie_id = $("#movie-id").val();
    const editingData = {title: editTitle, rating: editRating, genre: editGenre};
     return fetch(`api/movies/${movie_id}`,{
       method: 'PATCH',
       headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editingData),
    })
  },





  /*This function deletes movies*/
  deleteMovie : (id) => {
    return fetch(`api/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
};

