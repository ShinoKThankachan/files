// let arr=[1,2,3,4,5]
// arr.forEach((value,index,array)=>{
//     console.log(`${value}:${value*value}`)
    
// })

let arr=[1,2,3,4,5]
arr.forEach((value,index,array)=>{
    array[index]=value*value
})
console.log(arr)