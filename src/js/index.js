const message = document.querySelector('#hello');
const messageToRender = 'ello there!'.split('');

const renderMessage = () => !messageToRender.length ? clearInterval(myfn) : message.innerHTML = message.innerHTML + messageToRender.shift()

const myfn = setInterval(renderMessage, 75);








