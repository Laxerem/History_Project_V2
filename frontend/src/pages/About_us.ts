import Page from "../modules/page";

class About_us_page extends Page{
    protected html;

    constructor() {
        super()
        this.html = document.querySelector<HTMLDivElement>('main')
        this.html.innerHTML = `
        <section class="about_us">
            <div class="programmers">
                <div class="programmer">
                    <div class="photo-container">
                        <div class="laxerem-photo">
                        
                        </div>
                    </div>
                    <div class="about_him">
                        <div class="username-container">
                            <a class="username" href="https://github.com/Laxerem" target="_blank">Laxerem</a>
                        </div>
                        <div class="text-about">
                            <p class="zagolovok"><strong>TeamLeader</strong></p>
                            <div class="case">
                                <div class="work">
                                    <h3>Участие в создании страниц:</h3>
                                    <div class="container">
                                        <ul class="list">
                                            <li>Главная Страница (помощь в разработке)</li>
                                            <li>Игра (полностью)</li>
                                            <li>О нас (полностью)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="case-container">
                                    <h3>Задействованные языки:</h3>
                                        <div class="container">
                                            <ul class="list">
                                                <li>TypeScript</li>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                            </ul>
                                        </div>
                                </div>
                                <div class="feature">
                                    <p>Главный пинок команды</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="programmer">
                    <div class="oiwiio-photo">
                    
                    </div>
                    <div class="about_him">
                        <div class="username-container">
                            <a class="username" href="https://github.com/oiwiio" target="_blank">oiwiio</a>
                        </div>
                        <div class="text-about">
                            <p class="zagolovok"><strong>Верстальщик</strong> по макету, дизайнер</p>
                            <div class="case">
                                <div class="work">
                                    <h3>Участие в создании страниц:</h3>
                                    <div class="container">
                                        <ul class="list">
                                            <li>Главная Страница (ведущий в разработке)</li>
                                            <li>Исторический текст на страницах (полностью)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="case-container">
                                    <h3>Задействованные языки:</h3>
                                        <div class="container">
                                            <ul class="list">
                                                <li>HTML</li>
                                                <li>CSS</li>
                                            </ul>
                                        </div>
                                </div>
                                <div class="feature">
                                    <p>Следователь, копирайтер - батя текста</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="programmer">
                    <div class="devilsatu-photo">
                    
                    </div>
                    <div class="about_him">
                        <div class="username-container">
                            <a class="username" href="https://github.com/DevilSatu" target="_blank">DevilSatu</a>
                        </div>
                        <div class="text-about">
                            <p class="zagolovok"><strong>Верстальщик</strong></p>
                            <div class="case">
                                <div class="work">
                                    <h3>Участие в создании страниц:</h3>
                                    <div class="container">
                                        <ul class="list">
                                            <li>Главная Страница (помощь в разработке)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="case-container">
                                    <h3>Задействованные языки:</h3>
                                        <div class="container">
                                            <ul class="list">
                                                <li>HTML</li>
                                                <li>CSS</li>
                                            </ul>
                                        </div>
                                </div>
                                <div class="feature">
                                    <p>Дома нет, но дома сделает</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}

export default About_us_page