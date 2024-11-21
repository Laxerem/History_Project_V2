import Router from "../routes/router";
class App {
    private router: Router
    constructor() {
        this.router = new Router()
    }
}

const app = new App()