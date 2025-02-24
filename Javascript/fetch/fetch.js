function Post(){
    fetch('https://dummyjson.com/posts')
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
    console.log('hello')

}

Post()