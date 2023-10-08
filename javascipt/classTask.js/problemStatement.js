let row = [];

let row_array1 = {
    name: "Tolu",
    popular: 100,
    temp: 10,
    currency: "NG"
};

let row_array2 = {
    name: "Mide",
    popular: 100,
    temp: 10,
    currency: "NG"
};

let row_array3 = {
    name: "Vikky",
    popular: 100,
    temp: 10,
    currency: "NG"
};

let row_array4 = {
    name: "Esther",
    popular: 100,
    temp: 10,
    currency: "NG"
};

let row_array5 = {
    name: "Jonathan",
    popular: 100,
    temp: 100,
    currency: "NG"
};
let row_array6 = {
    name: "Alfa",
    popular: 100,
    temp: 10,
    currency: "NG"
};

let row_array7 = {
    name: "Harry",
    popular: 100,
    temp: 5,
    currency: "NG"
};

let row_array8 = {
    name: "Pwesh",
    popular: 100,
    temp: 30,
    currency: "NG"
};

let row_array9 = {
    name: "Grace",
    popular: 100,
    temp: 10,
    currency: "NG"
};

row.push([null, row_array1, row_array2, row_array3]);
row.push([row_array4, row_array5, row_array6, null,]);
row.push([row_array7, null, row_array8, row_array9]);

let totalpopulation = 0;

for (const arr of row) {
        for (let obj of arr){
            if(obj !== null){
                if (obj.temp <= 10){
                    totalpopulation = totalpopulation + obj.popular;
                    console.table(`name : ${obj.name} | population : ${obj.popular} | temp : ${obj.temp}`)
                }
            }
        }
    
}

console.log(totalpopulation)

// console.table(row)

// console.table(row_array1)

// for (const arr in row) {
//     if (arr.hasOwnProperty.call(arr, arr)) {
//         const element = row[arr];
        
//     }
// }


//type of destructuring pattern
//1) 