function get_button(text: string, class_name: string = ""): HTMLButtonElement {
    const button = document.createElement('button')
    const button_text = document.createElement('h4')
    button.className = class_name

    button_text.innerText = text
    button.appendChild(button_text)
    return button
}

export default get_button