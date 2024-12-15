function change_style(name) {
    const head = document.querySelector('head')
    if (head) {
        const link = document.createElement('link')

        link.rel = "stylesheet"
        link.href = `/src/style/${name}.css`

        const styles = document.querySelectorAll('link')
        styles.forEach((link) => {
            if (link.className != "main") {
                head.removeChild(link)
            }
        })
        head.appendChild(link)
    }
}

export default change_style