// async function Post() {
//     let responses=await fetch('https://dummyjson.com/products')
//     let data=await responses.json()
//     console.log(data)
//     console.log('Hello')
// }

// Post()


async function fetchData(){
    try{
        let responses = await fetch('https://dummyjson.com/products')
        if (!responses.ok){
            throw new Error('fetch unsuccessful')
        }
        let data = await responses.json()
        console.log(data)
        data.products.forEach(value=>{
            let newdiv = document.createElement('div')
            newdiv.className='product col-lg-4'
            newdiv.innerHTML= 
                `<h3>${value.title}</h3>
                <p>${value.description}</p>
                <p><Strong>Price:</Strong>$ ${value.price}</p>
                <img src=${value.thumbnail}>`
            document.body.appendChild(newdiv)
        })
    }
    catch(error){
        console.log("Error happened:", error.message)
    }
}

fetchData()

