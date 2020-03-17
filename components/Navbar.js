class Navbar extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = /*html*/`

            <div class="navbar bg-primary">
                <h1>Player Scoreboard</h1>
            </div>        
        `;
    }
}

customElements.define('app-navbar', Navbar);

