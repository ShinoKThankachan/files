// let regEx=/[cr]at/
// console.log(regEx.test('cat'))
// console.log(regEx.test('rat'))
// console.log(regEx.test('bat'))


// let regEx=/[a-z0-9]/
// console.log(regEx.test('cat'))
// console.log(regEx.test('012'))
// console.log(regEx.test('rat012'))
// console.log(regEx.test('Rat'))
// console.log(regEx.test('RAT'))


// let regEx=/^cat/
// console.log(regEx.test('cat is an animal'))
// console.log(regEx.test('i love cat'))


// let regEx=/cat$/
// console.log(regEx.test('cat is an animal'))
// console.log(regEx.test('i love cat'))


// let regEx=/^cat/im
// console.log(regEx.test('Cat is an animal'))
// console.log(regEx.test('i love cat'))


// let regEx=/cat$/im
// console.log(regEx.test('Cat is an animal'))
// console.log(regEx.test('i love cat'))


// let regEx=/meats?$/i
// console.log(regEx.test('meat'))
// console.log(regEx.test('meats'))
// console.log(regEx.test('meatsss'))


// let regEx=/fish(es)?$/i
// console.log(regEx.test('fish'))
// console.log(regEx.test('fishes'))
// console.log(regEx.test('fishesss'))
// console.log(regEx.test('fishs'))


// let regEx=/meats*$/i
// console.log(regEx.test('meat'))
// console.log(regEx.test('meats'))
// console.log(regEx.test('meatsss'))


// let regEx=/meats+$/i
// console.log(regEx.test('meat'))
// console.log(regEx.test('meats'))
// console.log(regEx.test('meatsss'))


// let regEx=/meats.+$/i
// console.log(regEx.test('meat'))
// console.log(regEx.test('meats'))
// console.log(regEx.test('meatsss'))


// let regEx=/[^hello]/i
// console.log(regEx.test('hello'))
// console.log(regEx.test('hellogoodmorning'))
// console.log(regEx.test('meatsss'))


// let regEx=/l{2}o$/i
// console.log(regEx.test('hello'))
// console.log(regEx.test('helo'))
// console.log(regEx.test('hellllo'))


// let regEx=/l{2,4}o$/
// console.log(regEx.test('hello'))
// console.log(regEx.test('helo'))
// console.log(regEx.test('hellllo'))
// console.log(regEx.test('hellllllo'))


let regEx=/\d3/
console.log(regEx.test('123'))
console.log(regEx.test('456'))
console.log(regEx.test('helo123'))
console.log(regEx.test('1234'))
