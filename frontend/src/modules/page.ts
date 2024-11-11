abstract class Page {
    protected html: HTMLElement

    constructor() {
        this.html = document.createElement("section")
    }

    render() {
        const section = document.querySelector("main")
        if (section) {
            section.innerHTML = this.html.innerHTML
        }
        else {
            console.log("Нет секции main для страницы")
        }
    }
}

export default Page