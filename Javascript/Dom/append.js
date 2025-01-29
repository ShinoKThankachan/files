// let newelement=document.createElement('div')
// newelement.classList.add('container')
// newelement.innerHTML='<p>Hello</p>'
// document.body.appendChild(newelement)

function fun(){
    element=document.getElementById('text')
    console.log(element.value)
    paragraph=document.getElementById('paragraph')
    ptag=document.createElement('p')
    ptag.innerHTML=element.value
    paragraph.appendChild(ptag)
}