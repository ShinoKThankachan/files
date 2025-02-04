let numbers = [];
for (i=1; i<=20; i++) {
    numbers.push(i);
}
let evenNumbers = [];
let oddNumbers = [];
for (i=0; i<numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    } else {
        oddNumbers.push(numbers[i]);
    }
}
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);



let array = 0;
for (i=1; i<=10; i++) {
    array += i;
}
console.log(array);




let a = 0;
let b = 0;
let c = 0;
for (i=0; i<numbers.length; i++) {
    c += numbers[i];
    if (numbers[i] % 2 === 0) {
        a += numbers[i];
    } else {
        b += numbers[i];
    }
}
console.log("Sum of Even Numbers:", a);
console.log("Sum of Odd Numbers:", b);
console.log("Sum of Natural Numbers up to 20:", c);
