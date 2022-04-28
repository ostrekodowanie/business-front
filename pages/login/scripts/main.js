const overlay = document.querySelector('.main')

const setHeight = () => {
    let screenHeight = window.innerHeight
    overlay.style.minHeight = `calc(${screenHeight}px - 5rem)`
}

window.addEventListener('resize', () => {
    setHeight()
})

setHeight()