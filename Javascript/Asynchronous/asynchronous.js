console.log('Hello')
setTimeout(()=>{
    console.log('How are you?')
},3000)
console.log('Hi')

mybtn=document.getElementById('btn')
mybtn.addEventListener('click',()=>{setTimeout(()=>{
    mybtn.style.backgroundColor='red'
},3000)})