// let arr=[1,2,3,4,5]
// let sum=arr.reduce((acc,val)=>acc+val,0)
// console.log(sum)

let arr=[3,5,6,8,10]
let element=arr.reduce((acc,val)=>val>acc?val:acc)
console.log(element)