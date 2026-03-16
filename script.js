function calculateGrade(){

let hindi = parseInt(document.getElementById("hindi").value);
let english = parseInt(document.getElementById("english").value);
let math = parseInt(document.getElementById("math").value);
let physics = parseInt(document.getElementById("physics").value);
let computer = parseInt(document.getElementById("computer").value);

let resultBox = document.getElementById("resultBox");

if(isNaN(hindi) || isNaN(english) || isNaN(math) || isNaN(physics) || isNaN(computer)){
resultBox.innerHTML="Please enter all marks";
resultBox.style.background="orange";
return;
}

let total = hindi + english + math + physics + computer;
let percentage = total/5;

let grade="";

if(hindi<40 || english<40 || math<40 || physics<40 || computer<40){
grade="FAIL";
resultBox.style.background="red";
}
else if(percentage>=90){
grade="A+";
resultBox.style.background="green";
}
else if(percentage>=80){
grade="A";
resultBox.style.background="green";
}
else if(percentage>=70){
grade="B+";
resultBox.style.background="lightgreen";
}
else if(percentage>=60){
grade="B";
resultBox.style.background="lightgreen";
}
else if(percentage>=50){
grade="C";
resultBox.style.background="yellow";
}
else{
grade="D";
resultBox.style.background="orange";
}

resultBox.innerHTML=
"Total Marks: "+total+"<br>"+
"Percentage: "+percentage+"%<br>"+
"Grade: "+grade;

}

function resetForm(){
document.getElementById("hindi").value="";
document.getElementById("english").value="";
document.getElementById("math").value="";
document.getElementById("physics").value="";
document.getElementById("computer").value="";
document.getElementById("resultBox").innerHTML="";
}