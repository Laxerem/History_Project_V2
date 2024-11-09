import MainPage from "../app/main_page";


class Router {
    private hash: string;
    private main_page: MainPage

    constructor() {
        this.main_page = new MainPage()
        this.hash = window.location.hash.slice(1);
        this.main_page.change_page(this.hash)

        window.addEventListener("hashchange", () => {
            const hash = window.location.hash.slice(1);
            this.hash = hash;
            this.main_page.change_page(this.hash)
        })
    }
}

export default Router