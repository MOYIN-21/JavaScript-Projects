let arr1 = new Array(5);
let arr2 = [1, 2, 3, 4, 5];
let arr3 = new Array(1, 2, 3, 4, 5, 6, 7);


arr1 = [3, "4", 7, "3", {name: "Daniel"}]

// arr1 = [3, 4, 2, 3,4, 1]
arr1.shift()
arr1.unshift(23)
console.log(arr1)
arr1.pop()
arr1.push(45)

Array.prototype.laugh = "lol"
console.log(arr1.laugh)

console.log(arr1.slice(0,3))

arr1.splice(2, 2)
console.log(arr1)

console.log("*********************************")

//Add Elements

const friends = ['Moyin', 'Precious', 'Grace'];
const newLength = friends.push('Chisom');// add as the last
console.log(friends);
console.log(newLength);

friends.unshift('Ashly');// add as the first
console.log(friends);

//Remove Elements
friends.pop(); // to remove last element
console.log(friends);

friends.shift();// remove first element
console.log(friends);

console.log(friends.indexOf('Moyin'));
console.log(friends.indexOf('Tee'));

console.log(friends.includes('Moyin'));
console.log(friends.includes('Tee'));

friends.splice(1, 1, "Moyinoluwa"); //splice(start, deleteCount, item1)
console.log(friends);

friends.slice(1.1); //slice(start, end)
console.log(friends);

let array = [[1, 2], [3, 4]];
console.table(array);






const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));

console.log(animals.slice(1, 5));

console.log(animals.slice(-2));

console.log(animals.slice(2, -1));

console.log(animals.slice());

console.log("==============================================")



const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');

console.log(months);

months.splice(4, 1, 'May');

console.log(months);



console.log("==============================================")


const month = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();// arrange in alphabetical order.//The default sort order is ascending, built upon converting the elements into strings, then comparing their unicode values.
console.log(month);

const array1 = [1, 30, 4, 21, 100000];

array1.sort();
console.log(array1);


const monthYear = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = monthYear.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(monthYear); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 10, 21, 2];
const sortedValues = values.toSorted((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values);






