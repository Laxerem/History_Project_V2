import Page from "../modules/page";
import Dialog from "../app/game/game_process";
import '../style/style.css'
import '../style/game.css'
class Game_Page extends Page {
    protected html
    private game: Dialog

    constructor() {
        super()
        this.html = document.querySelector<HTMLDivElement>('main')
        this.html.innerHTML = `
        <div class="main_container">
        <div class="game_name">
        <h1>Игра</h1>
        </div>
        <div class="game_container">
        <div class="game_text">
        <h4 id="plot"></h4>
        </div>
        <div id="game_varios">

        </div>
        </div>
        </div>
        `
        this.game = new Dialog()
        this.game.start()
    }
}

export default Game_Page