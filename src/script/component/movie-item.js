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
              padding: 0;
            }
            :host {
              display: block;
              margin:1rem;
              position:relative;
              box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
              border-radius: 10px;
              overflow: hidden;
              background-color: rgb(220, 215, 201);
              flex-basis:20%;
            }
            
            .fan-art-movie {
              width: 100%;
              height:200px
              object-fit: cover;
              object-position: center;
            }
            .movie-info {
              justify-content:space-between;
              align-items:center;
              display:flex;
              padding:10px;
              font-weight: bold;
            }
            .movie-info>span {
              background-color:rgb(162, 123, 92);
              padding:10px;
              border-radius:2px;
            }
            .date{
              font-weight: bold;
              margin:10px 0 0 20px;
            }
            .description{
              padding:20px;
            }
            .description> p {
              margin-top: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 10; /* number of lines to show */
            }

            @media screen and (max-width: 800px) {
              .movie-info > h2 {
                  font-size: 16px !important;
                  font-weight: bold;
              }
              .movie-info > span{
                padding:8px;
              }
          
              .description > p {
                  font-size: 12px !important;
              }
              :host {
                flex-basis: 30%;
              }
            }
          
            @media screen and (max-width: 600px) {
              :host {
                flex-basis: 60%;
              }
            }
            
        </style>
            
            <img class="fan-art-movie" src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="Poster_path">
            
            <div class="movie-info">
              <h2>${this._movie.title}</h2>
              <span>${this._movie.vote_average}</span>
            </div>
            <div class="date">
              <h5>${this._movie.release_date}</h5>
            </div>
            <div class="description">
              <h3>Description</h3>
              <p>${this._movie.overview}</p>
            </div>
      `;
    }
}
  
customElements.define('movie-item', MovieItem);