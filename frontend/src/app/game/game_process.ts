import dialogs from "./dialog"
import get_button from "../../modules/modules"

class TextTyping {
    private delay: number;
    private element: HTMLElement
    private interval

    constructor(element, delay: number = 70) {
        this.delay = delay
        this.element = element
        this.interval = null
    }

    typing(text: string) {
        let i = 0;
        const element_link = this.element
            this.interval = setInterval(function() {
                if (i < text.length) {
                    element_link.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(this.interval);
                }
            }, this.delay);
    }

    stop() {
        clearInterval(this.interval)
    }
}
class Dialog {
    private id: string
    private description: string
    private variants
    private text: TextTyping

    constructor(id: string = '1') {
        this.id = id;
        this.variants = dialogs[id].variants
        this.description = dialogs[id].description
        const element = document.querySelector('#plot')
        this.text = new TextTyping(element, 40)
    }

    change_dialog(id: string) {
        this.id = id;
        this.variants = dialogs[id].variants
        this.description = dialogs[id].description
    }

    start() {
        this.text.stop()
        const description = document.querySelector('#plot')
        const varios_container = document.querySelector('#game_varios')
        if (description && varios_container) {
            description.innerHTML = ""
            varios_container.innerHTML = ""
            this.text.typing(this.description)
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