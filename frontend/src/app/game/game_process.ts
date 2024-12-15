import dialogs from "./dialog"
import get_button from "../../modules/modules"
class Dialog {
    private id: string
    private description: string
    private variants

    constructor(id: string = '1') {
        this.id = id;
        this.variants = dialogs[id].variants
        this.description = dialogs[id].description
    }

    change_dialog(id: string) {
        this.id = id;
        this.variants = dialogs[id].variants
        this.description = dialogs[id].description
    }

    start() {
        const description = document.querySelector('#plot')
        const varios_container = document.querySelector('#game_varios')
        if (description && varios_container) {
            varios_container.innerHTML = ""
            description.innerHTML = this.description
            for (let choice of this.variants) {
                const choice_button = get_button(choice["label"], "varios")
                choice_button.addEventListener('click', () => {
                    this.change_dialog(choice["nextDialog"])
                    this.start()
                })
                varios_container.appendChild(choice_button)
            }
        }
    }
    restart() {
        this.id = "1";
        this.start()
    }
}

export default Dialog