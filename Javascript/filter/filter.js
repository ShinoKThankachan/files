// let arr=[1,2,3,4]
// const newArray=arr.filter(value=>value%2==0)
// console.log(newArray)


let arr=[
    {id:1,name:'Alice',age:13},
    {id:2,name:'John',age:18},
    {id:3,name:'Doe',age:21}
]
const newArray=arr.filter(value=>value.age>=18)
console.log(newArray)