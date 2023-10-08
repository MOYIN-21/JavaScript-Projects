let array = [1, 2, 3, 4, 5, 6]
console.table(array)

// for (let i in array){
//     console.log(i)
// }
for(let i of array){
    // console.log(1)
    Process.stdout.write('${i}')
    console.log(i)
}

let obj = {
    name: "name",
    age: "34",
    height: "5'4",
    cohort: 17
}

let objVal = Object.values(obj)
let objKey = object.keys(obj)

console.log()
for(let i of objKey){
    process.stdout.write('${i}')
}
