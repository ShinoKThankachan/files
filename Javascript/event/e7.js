let myname=document.getElementById('name')
let myemail=document.getElementById('email')
let myphone=document.getElementById('phone')
let student=[]
let mybtn=document.getElementById('add')
mybtn.addEventListener('click',()=>{
    student.push({Name:myname,Email:myemail,Phone:myphone})
    console.log(student)
})