class AddPlayer extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = /*html*/`
        
        <form class="grid-3">
            <input type="text" placeholder="Player Name" name="name" />
            <input type="number" placeholder="Player Points" name="points" />
            <input type="submit" class="btn btn-primary" value="Add Player" />
        </form>        
        `;

        this.querySelector("form").addEventListener('submit',function(e){
            e.preventDefault();
            let inputs = e.target.elements;
            let newPlayer = {
                name: inputs["name"].value,
                points: parseInt(inputs["points"].value)
            };            
            let event = new CustomEvent('addplayer', { bubbles:true, detail: newPlayer });
            this.dispatchEvent(event);
            e.target.reset();   
          });
    }
}

customElements.define('app-add-player', AddPlayer);


