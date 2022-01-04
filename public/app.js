var
    student1 = {
        name: "Muhammad Hassan",
        fatherName: "Muhammad Aslam",
        contact: "03403903277",
        result: "Pass"
    }
var
    student2 = {
        name: "Muneeb",
        fatherName: "Shahid",
        contact: "03232867853",
        result: "Pass"
    }
var student3 = {
    name: "Sharyar",
    fatherName: "Irfan",
    contact: "03256652452",
    result: "Fail"
}
var student4 = {
    name: "Anas",
    fatherName: "Akbar",
    contact: "03023689785",
    result: "Pass"
}
var student5 = {
    name: "Arham",
    fatherName: "Ashraf",
    contact: "03403903366",
    result: "Fail"
}
var student6 = {
    name: "Huzaifa",
    fatherName: "Kamali",
    contact: "03403903366",
    result: "Pass"
}
var student7 = {
    name: "Noman",
    fatherName: "Rafique",
    contact: "03403903366",
    result: "Fail"
}
var student8 = {
    name: "Waqas",
    fatherName: "Aslam",
    contact: "03403903366",
    result: "Pass"
}
var student9 = {
    name: "Faizan",
    fatherName: "Aslam",
    contact: "03403903366",
    result: "Fail"
}
var student10 = {
    name: "Arsalan",
    fatherName: "Aslam",
    contact: "03403903366",
    result: "Pass"
}
// console.log(student1, student2, student3, student4, student5);
var studentList = [student1, student2, student3, student4, student5,student6,student7,student8,student9,student10];
// console.log(studentList);
var tbody = document.getElementById("tbody")

student1.rollNum = 1;
student2.rollNum = 2;
student3.rollNum = 3;
student4.rollNum = 4;
student5.rollNum = 5;
student6.rollNum = 6;
student7.rollNum = 7;
student8.rollNum = 8;
student9.rollNum = 9;
student10.rollNum = 10;

for (var i = 0; i < studentList.length; i++) {
    // studentList[i].rollNum = i + 1;
    var obj = studentList[i]
    tbody.innerHTML += "<tr><td>" + obj.rollNum + "</td><td>" + obj.name + "</td><td>" + obj.fatherName + "</td><td>" + obj.contact + "</td><td>" + obj.result + "</td></tr>"
}
function searchStd() {
    var inpVal = document.getElementById("inpVal");
    var rNo = document.getElementById("rollNO");
    var showName = document.getElementById("name");
    var fName = document.getElementById("fname");
    var contactNo = document.getElementById("contact");
    var res = document.getElementById("result");

    for (var i = 0; i < studentList.length; i++) {
        var std = studentList[i];
        if (inpVal.value == std.name) {
            console.log(std);
            rNo.innerHTML = std.rollNum;
            showName.innerHTML = std.name;
            fName.innerHTML = std.fatherName;
            contactNo.innerHTML = std.contact;
            res.innerHTML = std.result;
        }
    }

}
