import movies from './movies.js';

const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "?api_key=8ecf8bd30d0b10b0af175824c23bde7b";
const object = {
  nowPlaying : `${baseUrl}movie/popular${apiKey}`,
  search : `${baseUrl}search/movie${apiKey}&query=`
}

const main = document.getElementById('main');

class DataSource {

  static getMovieList(object) {
    return fetch(object)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            if (responseJson.results) {
                return Promise.resolve(responseJson.results);
            }
        })
  }

  static searchMovie(title) {
    return fetch(`${object.search}${title}`)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            if (responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${title} title is not found.`)
            }
        })
  }
}


export default DataSource;