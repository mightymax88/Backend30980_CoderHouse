const socket = io().connect();

function render(data){
    const html = data.map((elem, index) => {
        return (`<div>
            <strong> ${elem.author}</strong>:
            <em> ${elem.text} </em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

function addMessage(){
    const mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('texto').value
    };
    socket.emit('new-message', mensaje);
    return false;
}

socket.on('messages', function(data) {
    render(data);
});

//Servidor
// io.on('connection', socket => {
//     console.log('Usuario conectado')
//     socket.emit('Mi mensaje', 'Este es mi mensaje desde el servidor')
// })

// socket.on('mi mensaje', data => {
//     alert(data)
// })

// socket.on('notificación', data => {
//     console.log(data)
// })

// //Cliente
// socket.on('mi mensaje', data => {
//     alert(data)
//     socket.emit('notificacion', 'Mensaje recibido exitosamente')
// })