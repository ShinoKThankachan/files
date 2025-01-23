a=parseInt(prompt("enter your unit:"))
if(a<=100){
    console.log("no charge")
}
else if(a<=200){
    c=5*(a-100)
    console.log(`your charge is ${c}`)
}
else if(a>200){
    c=a-200
    result=(c*10)+500
    console.log(`your charge is ${result}`)
}
else{
    console.log("none of these")
}