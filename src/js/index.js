function main () {
    const message = document.querySelector('#hello');
    const messageToRender = 'ello there!'.split('');

    const renderMessage = () => !messageToRender.length ? clearInterval(myfn) : message.innerHTML = message.innerHTML + messageToRender.shift()

    const myfn = setInterval(renderMessage, 75);

    const animates = document.querySelectorAll('.anim');

    animates.forEach( animate => {
        animate.classList.add('move')
    })
}

window.onload = function() {
    document.body.classList.add('loaded');
    setTimeout(main, 1000);
}











