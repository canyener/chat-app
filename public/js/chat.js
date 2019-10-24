const socket = io()

socket.on('countUpdated', (count) => {
    console.log('The count has been updated!', count)
})