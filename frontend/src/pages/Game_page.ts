import Page from "../modules/page";
import Game from "../app/game";

class Game_Page extends Page {
    protected html: HTMLElement
    private game: Game

    constructor() {
        super()
        this.game = new Game("Choise of Russia")
        this.html = document.createElement('section')

        this.html.innerText = "HELLO"

    }
}

export default Game_Page