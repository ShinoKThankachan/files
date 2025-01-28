let add=function(a,b){
    return a+b
}
let sub=function(a,b){
    return a-b
}
let mul=function(a,b){
    return a*b
}
let div=function(a,b){
    return a/b
}

a=parseInt(prompt("enter a number:"))
b=parseInt(prompt("enter a number:"))
while(true){
c=parseInt(prompt(" 1.addition \
                    2.substraction \
                    3.multiplication \
                    4.division \
                    5.exit \
                    enter your choice:"))

if (c==1){
    console.log("result:"+add(a,b));
    break
}
else if (c==2){
    console.log("result:"+sub(a,b));
    break
}
else if (c==3){
    console.log("result:"+mul(a,b));
    break
}
else if (c==4){
    console.log("result:"+div(a,b));
    break
}
else if (c==5){
    console.log("Exiting");
    break
}
else{
    console.log("invalid choice")
}
}

