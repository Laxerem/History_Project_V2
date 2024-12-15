import Page from "../modules/page.ts"

class State_reforms extends Page {
    protected html: HTMLElement;

    constructor() {
        super()
        this.style = "state_results"
        this.html = document.createElement('div')
        this.html.innerHTML = `
        <div class="state_authorities_container">
            <div class="state_authorities_image">
                <div class="state_background_opacity">
                    <div class="main_state_text">
                        <h2>Реформы</h2>
                        <br>
                        <p>1696 по 1725 годы</p>
                        <br>
                        <p>
                            Из Великого посольства 1697–1698 гг. Пётр I вернулся со стойким убеждением в 
                            необходимости преобразования всех сфер жизни в России. Тем не менее достичь этих 
                            целей было невозможно без коренного изменения системы государственного управления и 
                            налоговой системы.
                        </p>
                    </div>
                </div>
        </div>
        <div class="state_main_content">
            <div class="state_reasons">
                <h2>На что были направлены реформы</h2>
                <br>
                <p>
                    1. Царь пытался переустроить Россию на принципах рациональности, построить регулярное государство, 
                    в котором все стороны жизни общества были поставлены под государственный контроль.
                </p>
                <div class="border_line">

                </div>
            </div>
        </div>
        `
    }
}

export default State_reforms