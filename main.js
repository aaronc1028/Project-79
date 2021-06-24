var students=[]
function submit(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var name3=document.getElementById("name3").value;
    var name4=document.getElementById("name4").value;
    students.push(name1)
    students.push(name2)
    students.push(name3)
    students.push(name4)
    console.log(students)
    document.getElementById("names").innerHTML=students
    document.getElementById("submitbutton").style.display="none"
    document.getElementById("sortbutton").style.display="inline-block"
}
function sort(){
    students.sort();
    document.getElementById("names").innerHTML=students
}
