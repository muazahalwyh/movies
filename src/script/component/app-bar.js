class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
 
  connectedCallback(){
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
      :host {
        padding: 8px;
        width: 100%;
        background-color: rgb(63, 78, 79);
        color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        display: flex;
        text-decoration: none;
      }
      
      h2{
      padding: 16px;
      margin-left:30px;
      color: aliceblue;
      }
      </style>
      
      <h2>Movie Star World</h2>
    `;
  }
}
 
customElements.define('app-bar', AppBar);