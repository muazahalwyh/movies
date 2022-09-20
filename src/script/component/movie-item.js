class MovieItem extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    set movie(movie) {
      this._movie = movie;
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          .container{
            width:100%;
          }
          :host {
            display: block;
            margin:1rem;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            background-color: rgb(220, 215, 201);
            flex-basis:15%;
            
            border:2px solid black;
          }
          .fan-art-movie {
            width: 100%;
            object-fit: cover;
            object-position: center;
          }
          .movie-info {
            padding: 10px;
          }
          .movie-info > h2 {
            font-weight: lighter;
          }
          .movie-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
          }
        </style>
        <img class="fan-art-movie" src="${this._movie.fanArt}" alt="Fan Art">
        <div class="movie-info">
          <h2>${this._movie.name}</h2>
          <p>${this._movie.description}</p>
        </div>
      `;
    }
}
  
customElements.define('movie-item', MovieItem);