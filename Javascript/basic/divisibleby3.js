a=parseInt(prompt("enter a number:"))
lastdigit=a%10
if(lastdigit%3==0){
    console.log(`${lastdigit},divisible by 3`)
}
else{
    console.log(`${lastdigit},is not divisible by 3`)
}