abstract class Page {
    protected html: HTMLElement

    constructor() {
        this.html = document.createElement("section")
    }

    render() {
        const main = document.querySelector("main")
        if (main) {
            main.innerHTML = this.html.innerHTML
        }
        else {
            console.log("Нет секции main для страницы")
        }
    }
}

export default Page