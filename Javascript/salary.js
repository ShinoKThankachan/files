a=parseInt(prompt("enter your year of service:"))
b=parseInt(prompt("enter your salary:"))
if(a>5){
    c=(0.05*b)+b
    console.log(`net bonus is ${c}`)
}
else{
    console.log(`you have no bonus,${b}`)
}