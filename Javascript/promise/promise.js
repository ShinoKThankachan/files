let promise = new Promise((resolve,reject)=>{
    success=false
    setTimeout(()=>{
        if (success){
            resolve('True')
        }
        else{
            reject('False')
        }
    },2000)
})
promise
.then(result=>console.log(result))
.catch(error=>console.log(error))