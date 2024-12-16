import Page from "../modules/page";
import Dialog from "../app/game/game_process";
import change_style from "../modules/change_style";
class Game_Page extends Page {
    protected html

    constructor() {
        super()
        this.style = "game"
        this.html = document.createElement('div')
        this.html.innerHTML = `
        <div class="main_section_container">
            <div class="main_container">
                <div class="game_name">
                    <h1>Choise Of Russia</h1>
                </div>
                <div class="game_container">
                    <div class="game_text">
                        <h4 id="plot"></h4>
                    </div>
                    <div id="game_varios">

                    </div>
                </div>
            </div>
        </div>
        `
    }
    render(): void {
        const main = document.querySelector('main')
        change_style("game")
        if (main) {
            main.innerHTML = this.html.innerHTML
            const dialog = new Dialog()
            dialog.start()
        }
    }
}

export default Game_Page