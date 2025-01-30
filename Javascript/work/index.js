function fun(str,index){
    return (index>=0 && index<str.length)? str[index]:undefined
}
console.log(fun('javascript',3))
console.log(fun('javascript',23))