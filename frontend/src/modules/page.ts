abstract class Page {
    protected url: string
    protected html: HTMLElement

    constructor(url: string) {
        this.url = url;
        this.html = document.createElement("section")
    }

    render() {
        const section = document.querySelector("main")
        if (section) {
            section.innerHTML = ""
            section.appendChild(this.html)
        }
        else {
            console.log("Нет секции main для страницы")
        }
    }
}

export default Page