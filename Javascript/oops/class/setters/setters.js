// setters

// class Button{
//     constructor(){
//         this.btn=document.createElement('button')
//         this.btn.textContent='click me'
//         document.body.appendChild(this.btn)
//     }
//     set width(width){
//         this.btn.style.width=width+'px'
//     }
//     set height(height){
//         this.btn.style.height=height+'px'
//     }
// }
// let btn1=new Button()
// btn1.width=200
// btn1.height=50

// getters

class Button{
    constructor(){
        this.btn=document.createElement('button')
        this.btn.textContent='click me'
        document.body.appendChild(this.btn)
        this.btn.style.width=200+'px'
        this.btn.style.height=100+'px'
        this.btn.style.backgroundColor='red'
    }
    get width(){
        return this.btn.style.width
    }
    get height(){
      return this.btn.style.height
    }
}
let btn1=new Button()
console.log(btn1.width,btn1.height)