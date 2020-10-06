import { API_URL, REACT_APP_API_KEY } from 'const/api'

function callApi(endpoint, headers) {
  return fetch(`${API_URL}${endpoint}`, headers)
    .then((response) => {
      return response.clone().json()
    })
    .then((response) => response)
    .catch((error) => error)
}

/* Movies
----------------------------------------*/
export const movies = () => callApi(`/list/1?&api_key=${REACT_APP_API_KEY}`)

export const movieDetails = (id) =>
  callApi(`/movie/${id}/credits?api_key=${REACT_APP_API_KEY}`)

/* Actor
----------------------------------------*/
export const actor = (movieId) =>
  callApi(`/person/${movieId}?api_key=${REACT_APP_API_KEY}`)

/* Search
----------------------------------------*/
export const searchMovie = (title) =>
  callApi(`/search/movie?api_key=${REACT_APP_API_KEY}&query=${title}`)
