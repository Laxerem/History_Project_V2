import Page from "../modules/page";
import Game from "../app/game";

class Game_Page extends Page {
    protected url: string
    protected html: HTMLElement
    private game: Game

    constructor(url) {
        super(url)
        this.url = url;
        this.html = document.createElement('div')
        this.game = new Game()
        this.html.innerText = "ВКЛЮЧИ ФАНТАЗИЮ ТУТ ИГРА"
    }
}

export default Game_Page