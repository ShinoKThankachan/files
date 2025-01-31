function pad(str,length,char){
    while(str.length<length){
        str=char+str
    }
    return str
}
console.log(pad("hello",8,'o'))