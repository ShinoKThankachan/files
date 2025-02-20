class Student{
    constructor(name,yob){
        this.name=name
        this.yob=yob
    }
    getAge(){
        return new Date().getFullYear()-this.yob
    }
    getName(){
        return this.name
    }
}
let stud1=new Student('john',2002)
console.log(stud1.getAge(),stud1.getName())
let stud2=new Student('manu',2003)
console.log(stud2.getAge(),stud2.getName())