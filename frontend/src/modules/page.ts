import change_style from "./change_style"
abstract class Page {
    protected html: HTMLElement
    protected style: string

    constructor() {
        this.html = document.createElement("section")
        this.style = ''
    }

    render() {
        const main = document.querySelector("main")
        change_style(this.style)
        if (main) {
            main.innerHTML = this.html.innerHTML
        }
        else {
            console.log("Нет секции main для страницы")
        }
    }
}

export default Page