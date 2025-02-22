console.log("start")

function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step 1: User fetched")
            resolve()
        },1000)
    })
}
function verifyUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step 2: User verified")
            resolve()
        },1000)
    })
}
function fetchOrders(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Step 3: Orders fetched")
            resolve()
        },1000)
    })
}
function processPayment(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step 4: Payment proccessed")
            resolve()
        },1000)
    })
}
function sendEmail(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step 5: Confirmation email sent")
            resolve()
        },1000)
    })
}

fetchUser()
    .then(verifyUser)
    .then(fetchOrders)
    .then(processPayment)
    .then(sendEmail)
    .then(()=> console.log("All steps completed"))
    .catch((error)=> console.log("Error:",error))

console.log("End")