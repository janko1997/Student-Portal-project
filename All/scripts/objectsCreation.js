// global varavle modules creation
var modules = new Modules();

let studentName = "";
do {
    studentName = prompt("Enter your Student Name","");
    if(studentName == ""){
        alert("To procced Enter a name");
    }
}while(studentName == "")
//creating student
var student = new Student(studentName);
console.log(student.name);

var emitCount = 0;
var onCount = 0;

