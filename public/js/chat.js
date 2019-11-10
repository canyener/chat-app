const socket = io()

//Elements
const $messageForm = document.querySelector('#message-form')

socket.on('message', (message) => {
    console.log(message)
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const message = e.target.elements.message.value
    
    socket.emit('sendMessage', message, (error) => {
       if(error) {
           return console.log(error)
       }

       console.log('Message delivered!')
    })
})

document.querySelector('#send-location').addEventListener('click', () => {
    if(!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }

        socket.emit('sendLocation', coords, (message) => {
            console.log(message)
        })
    })
})