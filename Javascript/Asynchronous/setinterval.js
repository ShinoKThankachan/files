// let i=10
// let timer=setInterval(()=>{
//     console.log(i)
//     i--
// },1000)
// let mybtn=document.getElementById('btn')
// mybtn.onclick=function(){
//     clearInterval(timer)
//     console.log('timer stopped')
// }


let i=1
let timer=setInterval(()=>{
    if(i>3){
        clearInterval(timer)
    }
    else{
        console.log(i)
    }
    i++
},1000)