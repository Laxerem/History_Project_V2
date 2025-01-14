import Page from "../modules/page.ts"
import change_style from "../modules/change_style.ts";

class State_reforms extends Page {
    protected html: HTMLElement;

    constructor() {
        super()
        this.style = "state_reforms"
        this.html = document.createElement('div')
        this.html.innerHTML = `
        <div class="state_authorities_container">
            <div class="state_authorities_image">
                <div class="state_background_opacity">
                <a class="back" href="/#themes">Назад</a>
                    <div class="main_state_text">
                        <h2>Реформы</h2>
                        <br>
                        <p>1696 по 1725 годы</p>
                        <br>
                        <p>
                            Реформы Петра I в области госуправления имели очень прогрессивный характер. 
                            Были уничтожены старые учреждения, созданы новые, Россия превратилась в империю, 
                            а Петр - в императора, система управления имела четкую структуру, а положение каждого 
                            человека во многом предопределено.
                        </p>
                    </div>
                </div>
            </div>
        <div class="state_main_content">
            <div class="state_reasons">
                <h1>На что были направлены реформы</h1>
                <br>
                <br>
                <ol>
                    <li><h2>Укрепление центральной власти:</h2> <br> 
                    
                    <b>Царь</b> пытался переустроить <b>Россию</b> на принципах <b>рациональности</b>, построить <b>регулярное государство</b>, 
                    в котором все стороны жизни общества были поставлены под <b>государственный контроль</b>.
                    </li>
                    <li><h2>Модернизация экономики:</h2><br>
                    
                        <b>Российская экономика</b> конца <b>XVII века</b> была слаборазвитой и зависела от <b>сельского хозяйства</b>. 
                        <b>Пётр I</b> понимал, что для успешной конкуренции с западными странами необходима <b>индустриализация 
                        и развитие промышленности</b>.
                    </li>
                    <li><h2>Необходимость укрепления военной мощи:</h2> <br>
                    
                        <b>Россия</b> в начале <b>XVIII века</b> находилась в состоянии постоянного <b>конфликта</b> с соседними странами, 
                        такими как <b>Швеция, Польша и Османская империя</b>. Для успешного ведения войн требовалась современная 
                        <b>армия и флот</b>, а также развитая <b>военная промышленность</b>.
                    </li>
                </ol>
            </div>
            <div class="main_reforms_content">
                <div class="border_line">

                </div>

                <h1 class="reforms-zag"><span class="bad">Реформы <span class="red">органов</span> управления</span></h1>

                <div class="reforms">
                    <div class="ref zem">
                        <div class="img img-4">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div>
                                <div class="reform-date">30 января 1699 год</div>
                            </div>
                        </div>
                        <div class="text">
                            <h2><span class="green">Земские учреждения</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                До создания <span class="green">земских учреждений</span> при <b>Петре I</b> в России местное управление осуществлялось на основе 
                                старой модели воеводского управления и системы областных приказов.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                В <b>1699 году</b> по указу <b>Петра I</b> во всех городах страны были созданы 
                                выборные органы власти — <span class="green">земские избы</span> или <b>ратуши</b>. 
                                <br>Они стали 
                                подчиняться не воеводской или приказной администрации, а 
                                напрямую <b>Бурмистрской палате</b> (Ратуше) в <b>Москве</b>. <br><br>
                                <b>Главная цель</b> этой реформы состояла в том, чтобы превратить <span class="green">земские избы</span> в 
                                ответственных сборщиков прямых и косвенных налогов, а 
                                Ратушу в центральное казначейство страны.
                            </p>
                        </div>
                    </div>
                    <div class="ref gub">
                        <div class="img img-1">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">1708–1715, 1719 годов</div>
                        </div>
                        <div class="text">
                            <h2><span class="blue-2">Губернская реформа</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                До <b>1708</b> года территория Российского государства делилась на 
                                различные по размеру и статусу <b>уезды</b>, такая система была 
                                устаревшей,  и отношения между центром и провинцией стали 
                                крайне сложными и запутанными, а само управление уездами 
                                из центра — крайне громоздким.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <div class="ref-text">
                                <div class="img img-9"></div>
                                <p>
                                    Вся страна была разделена на восемь крупных <span class="blue-2">губерний</span>: <b>Московская, Ингерманландская (Санкт-Петербургская), Киевская, Смоленская, Архангелогородская, Казанская, Азовская и Сибирская</b>.<br>
                                    <br>Во главе <span class="blue-2">губерний</span> были поставлены <b><span class="blue-2">губернаторы</span></b>.
                                    <br>Они должны были: собирать казённые сборы, блюсти за тем, чтобы все повинности, падавшие на <span class="blue-2">губернию</span>, были исполнены, чтобы определённое с <span class="blue-2">губернии</span> количество рекрутов и работных людей было доставлено в срок.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="ref sen">
                        <div class="img img-5">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">22 февраля 1711 г</div>
                        </div>
                        <div class="text">
                            <h2>Создание <span class='blue'>Cената</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                <b>Пётр I</b> во время своих постоянных отлучек, часто мешавших ему заниматься текущими делами управления, неоднократно 
                                (в <b>1706, 1707 и 1710 годах</b>) вручал дела нескольким <span class="red">избранным</span> лицам, от которых требовал, чтобы они, не обращаясь к нему 
                                ни за какими разъяснениями, вершили дела, <em>"как им дать ответ в день судный"</em>.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                Появилось новое учреждение, названное <span class='yellow'>правительствующим</span> <span class='blue'>Сенатом</span>. <span class='blue'>Сенат</span> осуществлял всю 
                                полноту власти в стране в отсутствие государя и координировал работу других <span class='yellow'>государственных</span> 
                                учреждений.
                            </p>
                        </div>
                    </div>
                    <div class="ref kol">
                        <div class="img img-2">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">1718 - 1721 года</div>
                        </div>
                        <div class="text">
                            <h2>Создание <span class="yellow">коллегий</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                Управление различными отраслями государства осуществлялось 
                                через <b>приказы</b> – центральные учреждения, каждое из которых 
                                отвечало за свою <b>сферу деятельности</b>.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                Создание <span class="yellow"><b>коллегий</b></span> — центральных <b>государственных учреждений</b>, отвечающих за различные отрасли управления.
                                <br>Каждая <span class="yellow">коллегия</span> занималась конкретными вопросами: 
                                <b>военная, адмиралтейская, иностранная</b> и так далее. Всего было создано около <b>десяти <span class="yellow">коллегий</span></b>.
                            </p>
                        </div>
                    </div>
                    <div class="ref mag">
                        <div class="img img-3">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">1720 год</div>
                        </div>
                        <div class="text">
                            <h2>Создание <span class="red">Магистрата</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                До создания <span class="red">Магистратов</span> при Петре I в управлении городами использовались 
                                бурмистерские палаты. Они были учреждены указом от 30 января 1699 года. 
                                Бурмистерская палата учреждалась в Москве, а затем такие же появились и в других 
                                городах России. Ей подчинялись земские избы всех городов, которые должны были заменить собой приказные избы и воевод
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                <span class="red">Главный Магистрат</span> стал главным органом городского управления, сосредоточившим в своих руках контроль за основными 
                                областями жизни столицы. Он контролировал организации гильдий, цехов, содействовал 
                                развитию ремёсел, торговли, мануфактур, городского хозяйства. 
                                <br>Также <span class="red">Магистрат</span> осуществлял функции суда для торгово-промышленного населения 
                                и некоторые полицейские функции.
                            </p>
                        </div>
                    </div>
                    <div class="ref sin">
                        <div class="img img-8">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">25 января 1721 год</div>
                        </div>
                        <div class="text">
                            <h2>Учреждение <span class="yellow">священного</span> правительствующего <span class="orange">Синода</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p> 
                                До <b>1721 года</b> Русская православная <span class="yellow">церковь</span> управлялась <b>патриархом</b>, который имел значительное влияние 
                                не только в религиозной, но и в политической сферах. Это отношение вызывало конфликты между 
                                <span class="yellow">церковной</span> и государственной властью.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                Создание <span class="yellow">Святейшего</span> <span class="orange">Синода</span> привело к подчинению Церкви — государству, т.к. все члены Синода назначались императором и присягали ему на верность.
                                Лишённая <b>Патриарха</b> <span class="yellow">церковь</span> уже не могла конкурировать с <b>Петром I</b> за власть над гражданами.
                                <br><br>Для дополнительного надзора за деятельностью <span class="orange">Синода</span> учреждена должность <b>обер-прокурора</b>.
                            </p>
                        </div>
                    </div>
                    <div class="ref sud">
                        <div class="img img-6">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">1697, 1719 и 1722 годах</div>
                        </div>
                        <div class="text">
                            <h2><span class="brown">Судебная</span> реформа</h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                До <span class="brown">судебной</span> реформы Петра I в России существовал <b>суд целовальников</b>, 
                                который выполнял функции аналога суда присяжных. Большое количество <span class="brown">судебных органов</span> 
                                и лиц, осуществлявших <span class="brown">судебную</span> деятельность (сам император, губернаторы, воеводы и другие), 
                                вносило в судопроизводство сумбур и неразбериху.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                Были созданы 10 <span class="brown">судебных</span> округов, над которыми руководили <b>надворные <span class="brown">суды</span></b>. 
                                В их подчинении были <em>провинциальные</em> и <em>городовые</em> <span class="brown">суды</span>. <br><br><span class="red">Магистрат</span> стал 
                                <span class="brown">судебной инстанцией</span> для ремесленников и мелких торговцев, записанных 
                                в посады. <br><br><b>Органом управления</b> над всеми <span class="brown">судами</span> являлась <span class="yellow">Юстиц-коллегия</span>, 
                                которая была апелляционным судом по отношению к надворным судам.
                            </p>
                        </div>
                    </div>
                    <div class="ref tab">
                        <div class="img img-7">
                            <div class="navigation-image">
                                <div class="nav top"></div>
                                <div class="nav bottom"></div>
                            </div>
                            <div class="reform-date">24 января 1722 год</div>
                        </div>
                        <div class="text">
                            <h2><span class="green-2">Табель о рангах</span></h2>
                            <br>
                            <h3>Как было:</h3>
                            <p>
                                Авторитет и власть рода передавались по наследству.
                            </p>
                            <br>
                            <h3>Как стало:</h3>
                            <p>
                                <span class="green-2">Табель</span> обязывала всех дворян служить и объявляла службу единственным способом получения любого <span class="yellow">государственного</span> чина. <br>
                                <br>После появления 14 ступенчатой системы рангов, где 14 - самая низшая, даже самый низкий дворянский род мог добиться высот. 
                                Всё решали лишь свои качества и преданность <b>царю</b>. 
                                <br><br><b>Родовое дворянство</b> начинает передаваться с 9 ступени.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        `
    }

    render() {
        const main = document.querySelector("main")
        change_style(this.style)
        if (main) {
            main.innerHTML = this.html.innerHTML
        }
        else {
            console.log("Нет секции main для страницы")
        }

        const hover_nav_top = document.querySelectorAll('.top') as NodeListOf<HTMLElement>;
        const hover_nav_bottom = document.querySelectorAll('.bottom') as NodeListOf<HTMLElement>;
        const image = document.querySelectorAll('.img') as NodeListOf<HTMLElement>;


        if (hover_nav_top && hover_nav_bottom && image) {
            image.forEach(img => {
                const navigation = img.querySelector('.navigation-image') as HTMLElement;

                if (navigation) {
                    const top = navigation.querySelector('.top') as HTMLElement
                    const bottom = navigation.querySelector('.bottom') as HTMLElement

                    if (top && bottom) {
                        top.addEventListener('mouseenter', () => {
                            img.style.backgroundPosition = 'top'
                        })

                        bottom.addEventListener('mouseenter', () => {
                            img.style.backgroundPosition = 'bottom'
                        })
                        
                        if (img.classList[1] != 'img-3' && img.classList[1] != 'img-2') {
                            top.addEventListener('mouseleave', () => {
                                img.style.backgroundPosition = 'center'
                            })
                            bottom.addEventListener('mouseleave', () => {
                                img.style.backgroundPosition = 'center'
                            })    
                        }

                        else {
                            bottom.addEventListener('mouseleave', () => {
                                img.style.backgroundPosition = 'top'
                            })   
                        }
                    }
                }
            })
        }
        const reforms = document.querySelectorAll('.ref')

        reforms.forEach(ref => {
            ref.addEventListener('click', () => {
                ref.scrollIntoView({block: 'center', behavior: 'smooth'})
            })
        }) 
    }
}

export default State_reforms