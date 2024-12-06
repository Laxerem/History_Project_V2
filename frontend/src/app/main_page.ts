import Game_Page from "../pages/Game_page";
import Error_Page from "../pages/Error_page";
import About_us_page from "../pages/About_us";

const page_key = {
    "game": Game_Page,
    "about_us": About_us_page
}

class MainPage {
    private page: any;
    private body: HTMLElement

    constructor() {
        this.page = null;
        this.body = document.body
    }

    change_page(name_page) {
        const instance_page = page_key[name_page];
        if (instance_page) {
            this.page = new instance_page()
            this.page.render()
        }
        else {
            console.log("ERROR PAGE NOT FOUND")
            this.page = new Error_Page("Такой страницы не существует :(", 404)
            this.page.render()
        }
    }
}

export default MainPage