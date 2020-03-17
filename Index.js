import "./components/Navbar.js";
import "./components/Player.js";
import "./components/AddPlayer.js";

let players = [
  {
    name: "John Doe",
    points: 53
  },
  {
    name: "Sam Smith",
    points: 45
  },
  {
    name: "Sara Wilson",
    points: 34
  }
];


class Index extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = /*html*/`

    <app-navbar></app-navbar>
    <div class="container">
      <app-add-player></app-add-player>
      <div class="player-list">
       
      </div>
    </div>     
    `;

    players.forEach(player => {
      let playerHtml = /*html*/`
        <app-player 
        name="${player.name}" 
        points="${player.points}">
        </app-player>
      `;
      this.querySelector(".player-list").insertAdjacentHTML('beforeend', playerHtml);
    });

    this.addEventListener('removeplayer',function(e){
      players = players.filter(player => player.name !== e.detail);
      e.target.parentNode.removeChild(e.target);
    });

    this.addEventListener('addplayer',function(e){
      players.push(e.player);
      console.log(players);
      let playerHtml = /*html*/`
        <app-player 
        name="${e.detail.name}" 
        points="${e.detail.points}">
        </app-player>
      `;

      this.querySelector(".player-list").insertAdjacentHTML('beforeend', playerHtml);
    });
  }  
}


customElements.define('app-index', Index);
export let success = true;

