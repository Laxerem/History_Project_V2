import Page from "../modules/page";

class Error_Page extends Page {
    protected html: HTMLElement
    private error_name: string
    private error_code: number


    constructor(error_name: string = "Неизвестная Ошибка", error_code: number = 404) {
        super()
        const error_container = document.createElement('div')
        error_container.className = "error_container"
        this.error_name = error_name
        this.error_code = error_code

        error_container.innerHTML = `
        <div class = "error">
            <h2 class="error_text">${this.error_name}</h2>
            <h2 class="error_code">${this.error_code}</h2> 
        </div>
        `
        this.html = error_container;
    }

    render(): void {
        const main = document.querySelector("main")
        if (main) {
            main.innerHTML = ''
            main.appendChild(this.html)
        }
        else {
            console.log("Нет секции main для страницы")
        }
    }
}

export default Error_Page