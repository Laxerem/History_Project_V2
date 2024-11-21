import Page from "../modules/page";
import Game from "../app/game/game";

class Game_Page extends Page {
    protected html: HTMLElement
    private game: Game

    constructor() {
        super()
        this.game = new Game("Choise of Russia")
        this.html = document.createElement('section')

        const main_container = document.createElement('div')
        const game_name_container = document.createElement('div')
        const game_name = document.createElement('h1')
        const game_container = document.createElement('div')
        const game_text_container = document.createElement('div')
        const game_text = document.createElement('h4')
        const game_varios_container = document.createElement('div')
        const varios = document.createElement('div')
        const text_varios = document.createElement('h3')


        main_container.className = "main_container"
        game_name_container.className = "game_name"
        game_name.innerHTML = "Игра"
        game_container.className = "game_container"
        game_text_container.className = "game_text"
        game_text.className = "plot"
        game_varios_container.className = "game_varios"
        varios.className = "varios"
        
        text_varios.innerText = "ВЫБОР 1"

        game_name_container.appendChild(game_name)
        main_container.appendChild(game_name_container)
        game_text_container.appendChild(game_text)
        game_container.appendChild(game_text_container)
        game_varios_container.appendChild(varios)
        game_container.appendChild(game_varios_container)
        main_container.appendChild(game_container)

        this.html.appendChild(main_container)


    }
}

export default Game_Page