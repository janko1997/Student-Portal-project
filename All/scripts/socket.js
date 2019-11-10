//Make Connection
const socket = io.connect('http://localhost:9000');

//Send event message and student
function sendEvent(message){
    socket.emit('chat', {
        student: student.name,
        message: message
    });
}