const lightBtn = document.getElementById('light-btn')
const darkBtn = document.getElementById('dark-btn')

lightBtn.addEventListener('click', () => {
    lightBtn.classList.add('btn-move-light')
    setTimeout(() => { 
        lightBtn.classList.toggle('hide') 
        darkBtn.classList.toggle('hide')
        lightBtn.classList.remove('btn-move-light')
    }, 200)
    changeMode()
})

darkBtn.addEventListener('click', () => {
    darkBtn.classList.add('btn-move-dark')
    setTimeout(() => { 
        darkBtn.classList.toggle('hide') 
        lightBtn.classList.toggle('hide')
        darkBtn.classList.remove('btn-move-dark')
    }, 200)
    changeMode()
})

const changeMode = () => {
    const body = document.getElementsByTagName('body')[0]
    body.classList.toggle('black-background')

    const yellow = [document.getElementsByTagName('h1')[0], document.getElementsByTagName('h2')[0]]
    for (let text of yellow) {
        text.classList.toggle('yellow-text')
    }

    const white = [document.getElementById('dark-mode-title'), document.querySelector('.div-text')]
    for (let text of white) {
        text.classList.toggle('white-text')
    }
}

