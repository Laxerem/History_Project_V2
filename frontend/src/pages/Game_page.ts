import Page from "../modules/page";
import Dialog from "../app/game/game_process";
class Game_Page extends Page {
    protected html
    private dialog: Dialog

    constructor() {
        super()
        this.html = document.querySelector<HTMLDivElement>('main')
        this.html.innerHTML = `
        <div class="main_section_container">
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
        </div>
        `
    }
    render(): void {
        if (this.dialog) {

        }
        else{
            this.dialog = new Dialog()
            this.dialog.start()
        }
    }
}

export default Game_Page