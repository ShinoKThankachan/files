function fun(str,index){
    return (index>=0 && index<str.length)? str[index]:undefined
}
let a='javascript'
let b=(fun(a,3))
console.log(b)
let c=(fun(a,23))
console.log(c)
