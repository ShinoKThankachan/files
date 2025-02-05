// let obj={name:'manu',age:20}
// console.log(obj.name)
// const person={
//     name:'Manu',
//     age:22,
//     greet:function(){
//         console.log('Good morning',this.name)

//     }
// }
// console.log(person.greet())

// const students=[{name:'Manu',age:20},{name:'sonu',age:22}]
// console.log(students[1].name)

// for (i=0; i<=students.length-1; i++) {
//     console.log(students[i].name,students[i].age)
// }


// n=parseInt(prompt('Enter no students you want to add:'))
// student=[]
// for (i=1; i<=n; i++) {
//     a=prompt('Enter student name:')
//     b=parseInt(prompt('Enter student age:'))
//     student.push({name:a,age:b})
// }
// console.log(student)

// const students=[{name:'Manu',age:20},{name:'sonu',age:22}]

// let jsontext=JSON.stringify(students)
// console.log(jsontext)

// let newobj=JSON.parse(jsontext)
// console.log(newobj)


// let a=10
// let b=a
// b++
// console.log(a)
// console.log(b)


// function change(x){
//     x++
//     console.log(x)
// }
// let a=10
// let x=a
// change(x)
// console.log(a) 

// let ar=[1,2,3,4]
// let newar=ar
// newar[1]=20
// console.log(ar)


// function change(newar){
//     newar[1]=20
// }
// let ar=[1,2,3,4]
// let newar=ar
// change(newar)
// console.log(ar)


function greet(){
    let name='john'
    return function(){
        console.log(`Good morning ${name}`)

    }
}
let fun=greet()
console.log(fun)
fun()
