// function myButton(name){
//     this.button=document.createElement('button')
//     this.button.innerHTML=name
//     document.body.appendChild(this.button)

// }
// myButton.prototype.onClick=function(fn){
//     this.button.onclick=fn
// }
// let btn1=new myButton('click me')
// btn1.onClick(()=>console.log('clicked'))
// console.log(myButton.prototype)


class Button{
    constructor(name){
        this.button=document.createElement('button')
        this.button.innerHTML=name
        document.body.appendChild(this.button)
    }
}

function onClick(fn){
    this.button.onclick=fn
}
Button.prototype.onClick=onClick
let obj=new Button('click me')
obj.onClick(()=>console.log('clicked'))