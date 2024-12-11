import Page from "../modules/page";

class Home_Page extends Page {
    protected html: HTMLElement;

    constructor() {
        super()
        this.html = document.createElement('div')

        this.html.innerHTML = `
        <div class="home_container">
            <div class="main_home_container">
                <div class="topic_name">
                    <h2>Петр I: Государственные органы власти </h2>
                </div>
                <div class="flex_container">
                    <div class="petr_container">
                        <div class=" main_text">            
                            <h2>
                                Петр I провел значительные реформы в управлении государства,
                                создав новые органы власти для укрепления
                                централизованного государства.
                            </h2>
                        </div>
                        <div class="ava">
                            
                        </div>
                    </div>
                    <div class="bottom_main">
                        <button class="button_next"> <h3> Далее по теме </h3></button>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    render() {
        const main = document.querySelector("main")
        if (main) {
            main.innerHTML = this.html.innerHTML
            const button = document.querySelector('.button_next')
            if (button) {
                button.addEventListener('click', () => {
                    window.location.href = "/#themes"
                })
            }
        }
    }
}

export default Home_Page