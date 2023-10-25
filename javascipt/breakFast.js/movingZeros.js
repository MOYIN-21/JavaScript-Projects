//const numbers = [4, 3, 0, 2, 0, 4, 10, 12]
// array.sort();
// console.log(array);

const numbers = [4, 3, 0, 2, 0, 4, 10, 12]
for (let i = 0; i < numbers.length; i++) { 
    for (let j = i + 1; j < numbers.length; j++) { 
        if (numbers[i] == 0) { 
            const temp = numbers[j];
             numbers[j] = numbers[i]; 
             numbers[i] = temp; } } }
             console.log(numbers)