import Game_Page from "../pages/Game_page";

const page_key = {
    "game": Game_Page
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
            this.page = new instance_page();
            this.page.render()
        }
        else {
            console.log("ERROR PAGE NOT FOUND")
        }
    }
}

export default MainPage