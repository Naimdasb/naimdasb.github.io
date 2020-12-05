const spinner = document.querySelector('.spinner-grow');
const content = document.querySelector('.fadein');
const message = document.querySelector('#hello');
const animates = document.querySelectorAll('.anim');
const messageToRender = 'ello there!'.split('');


function main () {
    const renderMessage = () => !messageToRender.length ? clearInterval(myfn) : message.innerHTML = message.innerHTML + messageToRender.shift()

    const myfn = setInterval(renderMessage, 75);

    animates.forEach( animate => {
        animate.classList.add('move')
    })
}

window.onload = function() {
    spinner.classList.add('remove');
    content.classList.add('loaded');
    setTimeout(main, 1000);
}











