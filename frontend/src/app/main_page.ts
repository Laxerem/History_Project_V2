import Game_Page from "../pages/Game_page";
import Error_Page from "../pages/Error_page";
import About_us_page from "../pages/About_us";
import Themes_page from "../pages/themes";
import Home_Page from "../pages/Home_page";
import State_results from "../pages/state_results";
import State_authorities from "../pages/State_authorities";
import State_reforms from "../pages/State_reforms";

const page_key = {
    "game": Game_Page,
    "about_us": About_us_page,
    "themes": Themes_page,
    "home": Home_Page,
    "results": State_results,
    "state_bodies": State_authorities,
    "reforms": State_reforms
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