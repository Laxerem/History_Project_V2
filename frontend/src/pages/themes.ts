import Page from "../modules/page";
import change_style from "../modules/change_style";

class Themes_page extends Page {
    protected html

    constructor() {
        super()
        this.style = "themes"
        this.html = document.createElement('div')
        this.html.innerHTML = `
        <div class="themes_container">
            <div class="themes_catalog">
                <div class="theme reforms">
                    <div class="theme_name">
                        <h2>Реформы</h2>
                    </div>
                    <div class="theme_image">
                        <div class="comment">
                            <h2>Новые областные реформы, причины и цели</h2>
                        </div>
                    </div>
                </div>
                <div class="theme state_bodies">
                    <div class="theme_name">
                        <h2>Органы власти</h2>
                    </div>
                    <div class="theme_image">
                        <div class="comment">
                            <h2>Создание новых органов самоуправления</h2>
                        </div>
                    </div>
                </div>
                <div class="theme results">
                    <div class="theme_name">
                        <h2>Итоги</h2>
                    </div>
                    <div class="theme_image">
                        <div class="comment">
                            <h2>Итоги создания новых органов власти</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    render(): void {
        change_style(this.style)
        const main = document.querySelector('main')
        if (main) {
            main.innerHTML = this.html.innerHTML
            const themes = document.querySelectorAll(".theme")
            themes.forEach((element) => {
                element.addEventListener('click', () => {
                    window.location.href = `/themes/#${element.classList[1]}`
                })
            })
        }
    }
}

export default Themes_page