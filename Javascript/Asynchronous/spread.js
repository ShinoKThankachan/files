// let arr=[1,2,3]
// console.log([...arr])
// let newarr=[...arr]

let arr1=[1,2,3]
let arr2=[4,5,6]
let mergedarr=[...arr1,...arr2]
console.log(mergedarr)
let newarr=[...arr1,10,20]
console.log(newarr)
let obj={name:'manu',age:22}
let newobj={...obj}
console.log(newobj)
let obj2={place:'calicut',country:'india'}
let mergedobj={...obj,...obj2}
console.log(mergedobj)
let newobj2={age:23,state:'kerala'}
let objupdated={...obj,...newobj2}
console.log(objupdated)