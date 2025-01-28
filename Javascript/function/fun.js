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

function add(a,b){
  return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
   
    return a*b
}
function div(a,b){
    return a/b
}
