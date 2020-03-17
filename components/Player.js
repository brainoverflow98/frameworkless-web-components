  class Player extends HTMLElement {
    constructor() {
        super();
        
        let name = this.getAttribute("name");
        let points = parseInt(this.getAttribute("points"));
        let showControls = true;

        this.innerHTML = /*html*/`

        <div class="card">
        <h1 style="color: #204f6e;">
            ${name}
            <button class="toggle-controls btn btn-sm">-</button>
            <button class="remove-player btn btn-danger btn-sm">x</button>
        </h1>
        <h3 style="margin-bottom: 10px;">Points: <span class="points">${points}</span></h3>
        <div class="controls">
            <button class="add-point btn">+1</button>
            <button class="remove-point btn btn-dark">-1</button>
            <input class="set-points" type="number" value="${points}"/>
        </div>
        </div>     
        `;
        let playerElement = this;
        let pointsElement = this.querySelector(".points");

        this.querySelector(".set-points").addEventListener("change", function(e){ 
            points = e.target.value;
            pointsElement.innerHTML = points;
        });

        this.querySelector(".add-point").addEventListener("click", function(e){ 
            points += 1;
            pointsElement.innerHTML = points;
        });

        this.querySelector(".remove-point").addEventListener("click", function(e){ 
            points -= 1;
            pointsElement.innerHTML = points;
        });

        
        this.querySelector(".toggle-controls").addEventListener("click", function(e){ 
            let controlsElement = playerElement.querySelector(".controls");
            if(showControls)
            {
                e.target.innerHTML = "+";
                controlsElement.style.display = "none";
                showControls = false;
            } 
            else
            {
                e.target.innerHTML = "-";
                controlsElement.style.display = null;
                showControls = true;
            } 
        });

        this.querySelector(".remove-player").addEventListener("click", function(e){ 
            let event = new CustomEvent('removeplayer', { bubbles:true, detail: name });
            playerElement.dispatchEvent(event);
        });
    }
}

customElements.define('app-player', Player);



