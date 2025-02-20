// console.log(this)
// let obj={
//     name:'john',
//     greet:function(){
//         console.log(this)
//     }
// }
// obj.greet()

// let obj={name:'john'}
// function greet(){
//     console.log(`helo ${this.name}`)
// }
// greet.call(obj)

// let obj={name:'john'}
// function greet(role){
//     console.log(`helo ${this.name}, you are ${role}`)
// }
// greet.call(obj,'designer')

let obj={name:'john'}
function greet(role){
    console.log(`helo ${this.name}, you are ${role}`)
}
let bindfn=greet.bind(obj,'designer')
bindfn()