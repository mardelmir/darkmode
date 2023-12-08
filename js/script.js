const lightBtn = document.getElementById('light-btn')
const darkBtn = document.getElementById('dark-btn')

lightBtn.addEventListener('click', () => {
    lightBtn.classList.add('btn-move-light')
    setTimeout(() => {
        darkBtn.classList.toggle('hide')
        lightBtn.classList.toggle('hide')
        lightBtn.classList.remove('btn-move-light')
    }, 130)
    changeMode()
})

darkBtn.addEventListener('click', () => {
    darkBtn.classList.add('btn-move-dark')
    setTimeout(() => {
        lightBtn.classList.toggle('hide')
        darkBtn.classList.toggle('hide')
        darkBtn.classList.remove('btn-move-dark')
    }, 130)
    changeMode()
})

const changeMode = () => {
    document.getElementsByTagName('body')[0].classList.toggle('black-background')

    const yellow = [document.getElementsByTagName('h1')[0], document.getElementsByTagName('h2')[0]]
    yellow.forEach((title => title.classList.toggle('yellow-text')))

    const white = [document.getElementById('dark-mode-title'), document.querySelector('.div-text')]
    white.forEach((text => text.classList.toggle('white-text')))
}