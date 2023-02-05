class FooterBar extends HTMLElement {
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
        .footer {
            background-color: rgb(63, 78, 79);
            padding: 3px;
            text-align: center;
            font-weight: bold;
            color: black;
            display: block;
        }
        </style>
        
        <footer class="footer">
        <div class="container">
        <p class="text-white text-center">Copyright &copy; Mu'azah Al'Adawiyah, 2022</p>
        </div>
        </footer>
      `;
    }
}
   
customElements.define('footer-bar', FooterBar);