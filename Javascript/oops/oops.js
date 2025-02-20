let stud1={
    name:'john',
    yob:2002,
    getage:function(){
        return new Date().getFullYear()-this.yob
    },
    getname:function(){
        return this.name
    }
}
console.log(stud1.getage(),stud1.getname())
let stud2={
    name:'manu',
    yob:2003,
    getage:function(){
        return new Date().getFullYear()-this.yob
    },
    getname:function(){
        return this.name
    }
}
console.log(stud2.getage(),stud2.getname())