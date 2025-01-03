import Page from "../modules/page.ts"

class State_authorities extends Page {
    protected html: HTMLElement;

    constructor() {
        super()
        this.style = "state_bodies"
        this.html = document.createElement('div')
        this.html.innerHTML = 
        `
        <div class="state_authorities_container">
            <div class="state_authorities_image">
                <div class="state_background_opacity">
                    <a class="back" href="/#themes">Назад</a>
                    <div class="main_state_text">
                        <h2>Создание новых органов управления</h2>
                        <br>
                        <p>1700-1725 годы</p>
                        <br>
                        <p>
                            Пётр I оставил после себя полностью преображённую систему 
                            государственного правления. Между тем она во многом отвечала 
                            нуждам военного времени, которые требовали больших материальных 
                            затрат и мобилизации населения.
                        </p>
                    </div>
                </div>
        </div>
        <div class="state_main_content">
            <div class="state_authorities">
                <h1>Органы власти</h1>
                <br>
                <p>
                    <b>В 1718–1721</b> гг, громоздкую и неэффективную систему приказов, возникшую ещё в XV–XVI вв., заменили <b>коллегии</b>,
                    в основе которых лежало два главных принципа:
                <p>
                <ul>
                    <li><b>Первый</b> — разделение ведомственных функций.</li>
                    <li><b>Второй принцип</b> — коллективное принятие решений. Во главе каждой коллегии стоял президент, 
                    которого назначал Сенат с учётом мнения императора.</li>
                </ul>
                <br>
                <p>
                    <strong>Коллегии</strong> — высшие органы отраслевого управления в Российской империи, в основе работы которых 
                    лежал коллегиальный (совместный) принцип управления.
                </p>
                <div class="authorities central">
                    <div class="img img-1">
                        <div class="shadow_container">
                            <div class="text-zagolovok">
                                <h2>Центральные органы власти</h2>
                            </div>
                        </div>
                    </div>
                    <div class="text">
                        <div class="definition">
                            <p class="note">Отвечали за реализацию законов и управление внутренними и 
                                внешними делами государства.
                            </p>
                        </div>
                        <br>
                        <p>
                            <b>Правительствующий сенат</b> - высшее правительственное учреждение, 
                            которое обладало законодательными, распорядительными и судебными функциями, 
                            а также контролировало работу государственного аппарата в центре и на местах. 
                        </p>
                        <br>
                        <p><b>Тайная канцелярия</b> - занималась делами о государственных преступлениях.</p>
                        <br>
                        <h2>Коллегии</h2>
                        <p> 
                            <b>Иностранных дел</b> - ведала внешней политикой. <br>
                            <b>Военная коллегия</b> — сухопутными войсками. <br>
                            <b>Адмиралтейств-коллегия</b> — морским флотом. <br>
                            <b>Юстиц-коллегия</b> — гражданским и уголовным судом. <br>
                            <b>Берг-коллегия</b> — горнозаводской промышленностью <br>
                            <b>Мануфактур-коллегия</b> — мануфактурной промышленностью.<br> 
                            <b> Камер-коллегия</b> - Отвечала за казенные доходы.  <br>
                            <b> Штатс-контора</b> - Отвечала за государственные расходы <br>
                            <b> Духовная коллегия</b> - Управляла церковными делами (позже Святейший Правительствующий синод) <br>
                            <b> Вотчинная коллегия</b> - Выполняла функцию контроля дворянских вотчин (земельных наделов), их раздачу, регистрацию <br>
                            <b> Ревизион-коллегия</b> - Вела финансово-счётный контроль за деятельностью всех учреждений <br>

                        </p>
                    </div>
                </div>
                <div class="authorities local">
                    <div class="img img-2">
                        <div class="shadow_container">
                            <div class="text-zagolovok">
                                <h2>Местные органы власти</h2>
                            </div>
                        </div>
                    </div>
                    <div class="text">
                        <div class="definition">
                            <p class="note">Отвечали за исполнение указов центральной власти и управление местными делами.</p>
                        </div>
                        <h2>Губернии</h2>
                        <p>
                            В <b>1708 году</b> вся территория России была разделена на восемь губерний. Во главе каждой стоял назначавшийся царем  
                            губернатор, в руках которого была сосредоточена вся военная и гражданская власть.
                        </p>
                        <h2>Магистраты</h2>
                            Выборные органы местного управления городского населения. 
                            Управление ими осуществлял созданный в <b>1720 году</b> в Петербурге Главный магистрат, 
                            которому были подчинены местные магистраты во главе с бурмистрами и ратманами, 
                            избираемыми от городского населения.
                        </p>
                    </div>
                </div>
                <div class="authorities judicial">
                    <div class="img img-3">
                        <div class="shadow_container">
                            <div class="text-zagolovok">
                                <h2>Судебные органы</h2>
                            </div>
                        </div>
                    </div>
                    <div class="text">
                        <div class="definition">
                            <p class="note">Занимались разрешением споров и наказанием правонарушителей</p>
                        </div>
                        <h2>Коллегии</h2>
                        <p>
                            <b>Канцелярия юстиции</b>. Занималась судебными делами, включая гражданские и уголовные дела.<br>
                            <b>Юстиц-коллегия</b>. Контролировала суды и являлась высшей апелляционной инстанцией.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

export default State_authorities