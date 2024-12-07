//Добавление обработчика события на темы (нажатие), после которого меняется URL 

window.addEventListener('DOMContentLoaded', () => {
    const themes = document.querySelectorAll(".theme")
    themes.forEach((element) => {
        element.addEventListener('click', () => {
            window.location.href = `/themes/#${element.classList[1]}`
        })
    })
})