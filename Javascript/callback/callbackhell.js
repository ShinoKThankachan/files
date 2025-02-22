console.log("start")

function fetchUser(callback){
    setTimeout(()=>{
        console.log("Step 1: User fetched");
        callback()
    },1000)
}

function verifyUser(callback){
    setTimeout(()=>{
        console.log("Step 2: User verified")
        callback()
    },1000)
}
function fetchOrders(callback){
    setTimeout(()=>{
        console.log("Step 3: Orders fetched")
        callback()
    },1000)
}
function processPayment(callback){
    setTimeout(()=>{
        console.log("Step 4: Payments proccessed")
        callback()
    },1000)
}
function sendEmail(callback){
    setTimeout(()=>{
        console.log("Step 5: Confirmation email sent")
        callback()
    },1000)
}

fetchUser(()=>{
    verifyUser(()=>{
        fetchOrders(()=>{
            processPayment(()=>{
                sendEmail(()=>{
                    console.log("All steps completed")
                })
            })
        })
    })
})
console.log("End")