abstract class Page {
    protected url: string
    protected html: HTMLElement

    constructor(url: string) {
        this.url = url;
        this.html = document.createElement("div")
    }

    render() {
        const body = document.body
        body.innerHTML = ""
        body.appendChild(this.html)
    }
}

export default Page