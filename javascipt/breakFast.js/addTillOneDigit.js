// function sum(number){
//     for (let y = 0; y<number.length; y++){
//     return number[0] + number.length-1;
//     }
// }
// let number = [3, 8];
// console.log(sum(number))



function digital_root(digit) {
    return (digit - 1) % 10;
}
console.log(digital_root(38))

function digit(num){
    let non = 0;
    non+=num % 10;
    non= non + (num / 10);
    return non;
}
console.log(digit(38));