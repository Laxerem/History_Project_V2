import Page from "../modules/page.ts"

class State_results extends Page {
    protected html: HTMLElement;

    constructor() {
        super()
        this.style = "state_results"
        this.html = document.createElement('div')
        this.html.innerHTML = `
        <div class="state_authorities_container">
  <div class="state_authorities_image">
    <div class="state_background_opacity">
    <a class="back" href="/#themes">Назад</a>
      <div class="main_state_text">
        <h2>Итоги реформ </h2>
        <br>
        <p>
          Новые органы власти при Петре 1 показали себя эффективными, и просуществовали ещё долгое время, были введены новые реформы, созданы новые мануфактуры.
        </p>
      </div>
    </div>
  </div>
  <div class="state_main_content">
        <div class="state_reasons">
            <p>Правление первого русского императора завершилось в 1725 году. <b>Петр I</b> вошел в историю как великий новатор и реформатором. 
            Целью всех его реформ было создание великого Российского государства, великой империи, за очень малые сроки было полностью 
            преобразовано государство, Россия стала империей, получила выходы к морям и встала в один ряд с другими мировыми державами.
            </p>
          <div class="border_line">

          </div>
        </div>
        <div class="state_authorities">
            <h2>Введение новых органов самоуправления</h2>
            <br>
            <ul>
                <li>Помогло укрепить вертикальную власть на местах и лучше обеспечить армию снаряжением и рекрутами
                    Страна была разделена на губернии, чтобы сборы налогов с отдельных областей смогли содержать 
                    флот и армию, а приходящие на службу рекруты могли быть быстро задействованы на войне
                </li>

                <li>В стране установлена абсолютная монархия, за время своего правления Петру удалось создать государство 
                    с совершенной системой управления с сильной армией и мощным флотом, произошла полная централизация власти;
                </li>
                
                <li>Стремительно развивалась торговля, как внешняя, так и внутренняя;
                </li>
            </ul>
        </div>
        </div>
        `
    }
}

export default State_results