// let arr=[1,2,3,4]
// const[first,second,third,fourth]=arr
// console.log(first)

// let arr=[1,2,3,4,5]
// const[first,second,...Arr]=arr
// console.log(Arr)

// let arr=[1,2,[10,20,30],3,4]
// const[first,,third,...rest]=arr
// console.log(...rest)

// let obj={
//     name:'manu',
//     age:21,
//     place:'calicut'

// }
// const {name:userName,age:userAge,place:userPlace}=obj
// console.log(userName)


// let obj={
//     name:'manu',
//     age:21,
//     address:{city:'calicut',
//         state:'kerala'
//     }
// }
// const{name,age,address:{city,state}}=obj
// console.log(name)
// console.log(age)
// console.log(city)
// console.log(state)


// user={name:'manu',age:22}
// function obj({name,age}){
//     console.log(name,age)
// }
// obj(user)

user={name:'manu',age:22,place:'kochi'}
const{name,...rest}=user
console.log(rest)