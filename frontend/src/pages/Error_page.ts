import Page from "../modules/page";

class Error_Page extends Page {
    protected html: HTMLElement
    private error_name: string
    private error_code: number


    constructor(error_name: string = "Неизвестная Ошибка", error_code: number = 404) {
        super()
        this.html = document.createElement('section')
        this.error_name = error_name
        this.error_code = error_code

        this.html.innerText = `${this.error_name} ${this.error_code}`
    }
}

export default Error_Page