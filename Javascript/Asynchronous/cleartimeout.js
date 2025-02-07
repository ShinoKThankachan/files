let timer=setTimeout(()=>{
    console.log('Hello')
},10000)
let mybtn=document.getElementById('btn')
mybtn.onclick=function(){
    clearTimeout(timer)
    console.log('timer stopped')
}