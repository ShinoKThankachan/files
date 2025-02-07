let sp=document.getElementById('sp1')
let i=3
let mybtn=document.getElementById('btn')
let p=document.getElementById('p1')
let p2=document.getElementById('p2')
let span=document.getElementById('span')
let timer=setInterval(()=>{
    if(i<0){
        clearInterval(timer)
        span.innerHTML=""
        p.innerHTML="Your button is gone"
    } 
    else{
        sp.innerHTML=i
    }
    i--
},1000)
mybtn.addEventListener('click',function(){
    clearInterval(timer);
    p.innerHTML="You saved the button"
    p2.innerHTML=""
})
