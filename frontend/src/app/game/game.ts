import Dialog from "./game_process"

class Game {
    private dialog: Dialog
    constructor() {
        this.dialog = new Dialog()
    }

    start() {
        this.dialog.start()
    }
}

export default Game