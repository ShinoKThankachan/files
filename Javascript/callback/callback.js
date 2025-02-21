function greet(name,callback){
    console.log('Helo '+name)
    callback()
}
function sayGoodmorning(){
    console.log('Good morning')
}
greet('Athul',sayGoodmorning)