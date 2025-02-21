// try{

//     let x=y+10
//     console.log(x)
// }
// catch(error){
//     console.log('An error occured',error)
// }
// finally{
//     console.log('Execution completed')
// }


function canVote(age){
    if(age<18){
        throw new Error('Ineligible')
    }
    return 'Eligible'
}
try{
    console.log(canVote(15))
}
catch(e){
    console.log(e.message)
}   