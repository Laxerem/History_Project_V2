import Page from "../modules/page.ts"
import change_style from "../modules/change_style.ts";
import { svg1, svg1_animation, svg2, svg2_animation, svg3, svg3_animation } from "../modules/svg-elements.ts";

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
                <h1>Органы управления</h1>
                <br>
                <div class="authorities central">
                    <div class="img img-1">
                        <div class="shadow_container">
                            <div class="text-zagolovok">
                                <h2>Центральные органы управления</h2>
                            </div>
                        </div>
                    </div>
                        <div class="definition">
                            <p class="note">Отвечали за реализацию законов и управление внутренними и 
                                внешними делами государства.
                            </p>
                        </div>
                    <div class="text">
                        <div class="auth-text">
                            <div class="img img-5">

                            </div>
                            <div>
                                <h2><span class="red bad opacity">Царь (император)</span></h2>
                                <p>
                                    Верховный правитель, в руках которого сосредоточивалась законодательная, исполнительная и судебная власть.
                                </p>
                            </div>
                        </div>
                        <div class="border_line"></div>
                        <div class="auth-text rev">
                            <div>
                                <h2><span class="blue bad opacity">Правительствующий сенат <br>(1711 - 1722)</span></h2>
                                <p>
                                    Высшее правительственное учреждение, 
                                    которое обладало законодательными, распорядительными и судебными функциями, 
                                    а также контролировало работу государственного аппарата в центре и на местах.
                                    <br><br>
                                    В <b>1718—1722 гг</b>. <span class="blue opacity">Сенат</span> был <b>реформирован</b>. 
                                    В частности, его членами стали все
                                    <b>президенты коллегий</b>. Была введена должность <b>генерал-прокурора</b>.
                                </p>
                            </div>
                            <div class="img img-6">

                            </div>
                        </div>
                        <div class="border_line revers"></div>
                        <div class="auth-text">
                            <div class="img img-7">

                            </div>
                            <div>
                                <h2><span class="yellow bad opacity">Святе́йший прави́тельствующий сино́д <br>(1721 - 1917)</span></h2>
                                <p>
                                    Высший орган церковно-государственного управления Русской церковью в синодальный период. 
                                    Святейший синод был высшей административной и судебной инстанцией Русской церкви.
                                </p>
                            </div>
                        </div>
                        <div class="border_line"></div>
                        <div class="auth-text rev">
                            <div>
                                <h2><span class="green bad">Тайная канцелярия <br>(1718 - 1762)</span></h2>
                                <p>
                                    Орган политического сыска и суда по делам чрезвычайной важности в России образованный в 1718 году.
                                    Занималась делами о государственных преступлениях.
                                </p>
                            </div>
                            <div class="img img-8">

                            </div>
                        </div>
                        <div class="border_line revers"></div>
                        <div class="auth-text">
                            <div class="img img-9">

                            </div>
                            <div>
                                <h2><span class="brown bad">Коллегии <br> (1717 - 1802)</span></h2>
                                <p>
                                    Высшие органы отраслевого управления в Российской империи, 
                                    в основе работы которых лежал коллегиальный (совместный) принцип управления.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="graph-map">
                        <div class="graph-name">
                            <h2>Центральные органы управления</h2>
                        </div>
                        <div class="graph svg-1">
                            ${svg1}
                        </div>
                    </div>
                </div>
                <div class="authorities local">
                    <div class="img img-2">
                        <div class="shadow_container">
                            <div class="text-zagolovok">
                                <h2>Местные органы управления</h2>
                            </div>
                        </div>
                    </div>
                    <div class="definition">
                        <p class="note">Отвечали за исполнение указов центральной власти и управление местными делами.</p>
                    </div>
                    <div class="text">
                        <div class="auth-text">
                            <div class="img img-10">

                            </div>
                            <div>
                                <h2><span class="blue-2 bad">Губернаторы</span></h2>
                                <p>
                                    <b>Командовали</b> расположенными в <span class="blue-2">губернии</span> войсками и в то же 
                                    время были <b>главными</b> начальниками <b>гражданского управления</b>.
                                    <br><br>
                                    В <b>1708 году</b> вся территория <b>России</b> была разделена на <b>восемь</b> <span class="blue-2">губерний</span>. Во главе каждой стоял назначавшийся царем  
                                    <span class="blue-2">губернатор</span>, в руках которого была сосредоточена вся <b>военная</b> и <b>гражданская</b> власть.
                                </p>
                            </div>
                        </div>
                        <div class="border_line"></div>
                        <div class="auth-text rev">
                            <div>
                                <h2><span class="red bad">Магистраты</span></h2>
                                <p>
                                    Выборные органы местного управления городского населения.
                                    <br><br> 
                                    Управление ими осуществлял <b>созданный в 1720 году</b> в Петербурге <span class="red">главный Магистрат</span>, 
                                    которому <b>были подчинены</b> <span class="red">местные магистраты</span> во главе с <b>бурмистрами</b> 
                                    и <b>ратманами</b>, 
                                    избираемыми от городского населения.
                                </p>
                            </div>
                            <div class="img img-11">

                            </div>
                        </div>
                    </div>
                    <div class="graph-map map-2">
                        <div class="graph-name">
                            <h2>Местные органы управления</h2>
                        </div>
                        <div class="graph svg-2 svg-1 ">
                            ${svg2}
                        </div>
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
                    <div class="definition">
                        <p class="note">Занимались разрешением споров и наказанием правонарушителей</p>
                    </div>
                    <div class="text">
                        <div class="auth-text">
                            <div class="img img-12">

                            </div>
                            <div>
                                <h2><span class="brown bad">Коллегии</span></h2>
                                <p>
                                    <span class="brown"><b>Канцелярия юстиции</b></span> - занималась <span class="brown">судебными</span> делами, включая <b>гражданские</b> и <b>уголовные</b> дела.<br>
                                    <br>
                                    <span class="brown"><b>Юстиц-коллегия</b></span> - контролировала <span class="brown">суды</span> и являлась высшей <b>апелляционной инстанцией</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="graph-map map-2">
                        <div class="graph-name">
                            <h2>Судебные органы управления</h2>
                        </div>
                        <div class="graph svg-3 svg-1 ">
                            ${svg3}
                        </div>
                    </div>
                </div>
                <div class="authorities voen">
                    <div class="img img-4">
                        <div class="shadow_container">
                            <div class="text-zagolovok">
                                <h2>Военные органы</h2>
                            </div>
                        </div>
                    </div>
                    <div class="definition">
                        <p class="note">Организация и управление армией</p>
                    </div>
                    <div class="text">
                        <div class="auth-text">
                            <div class="img img-12">

                            </div>
                            <div>
                                <span class="brown bad"><h2>Коллегии</h2></span>
                                <p>
                                    <span class="brown"><b>Военная коллегия</b></span> - управление сухопутными войсками <b>Российской империи</b>, разработка и 
                                    утверждение <b>военных уставов</b>, инструкций и <b>правил</b> службы.
                                    <br>
                                    <br>
                                    <span class="brown"><b>Адмиралтейская коллегия</b></span> - организация и управление <b>морскими войсками</b> и <b>флотом</b>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style id="graph_animation">

            </style>
        </div>
        `
    }
    render() {
        const graph_keys = {
            'svg-1': svg1_animation,
            'svg-2': svg2_animation,
            'svg-3': svg3_animation
        }
        const main = document.querySelector("main")
        change_style(this.style)
        if (main) {
            main.innerHTML = this.html.innerHTML

            const authorities = document.querySelectorAll('.authorities')
            const style_element = document.getElementById('graph_animation') as HTMLStyleElement

            console.log(style_element)

            authorities.forEach(auth => {
                const graph = auth.querySelector('.graph')
                if (graph) {

                    auth.addEventListener('click', () => {
                        style_element.innerHTML = ''
                        style_element.innerHTML = graph_keys[graph.classList[1]]
                    })
                }
            })
        }
    }
}

export default State_authorities