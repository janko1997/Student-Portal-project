$(document).ready(() => {

  socket.emit('chatRoomRequest', (socket.id));

  $("#btn_timetable").click( ()=> {
    $("#mainBody").load("../timetable.html");
  });
});

// Query DOM
var message = document.getElementById('message'),
	name = document.getElementById('idname'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    InputName = document.form;

	

	InputName.idname.value = student.name;
	

//Emit events
btn.addEventListener('click', function(){

  if(message.value == ""){
        alert("You can't send a blank message");
      }else {
        sendEvent(message.value);
        message.value = null;
      }
});

//listen for events
socket.on('chat', function(data){
  $('#output').empty();
  data.forEach( (elem) =>{
    output.innerHTML += '<p><strong>' + elem.student + ': </strong>' + elem.message + '</p>';
  });
});