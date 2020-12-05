const message = document.querySelector('#hello');
const messageToRender = 'ello there!'.split('');

const renderMessage = () => {
   if(!messageToRender.length) {
    console.log('clear')
     clearInterval(myfn)
   } else {
    message.innerHTML = message.innerHTML + messageToRender.shift()
   }
}

const myfn = setInterval(renderMessage, 75);









