module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
        .then(response => response.json());
  },
  getMovies : (id) => {
    return fetch(`/api/movies/${id}`)
        .then(resp => resp.json());
  },
  /*This function creates new movies*/
  postMovies : (movie) => {
    return fetch('api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
  },
  /*This function edits movies*/
  patchMovies : (movie, id) => {
    return fetch(`api/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
  },
  /*This function deletes movies*/
  deleteMovies : (id) => {
    return fetch(`api/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
};

