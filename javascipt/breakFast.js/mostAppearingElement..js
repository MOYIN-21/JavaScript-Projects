const element = [3, 2, 3, 3, 2];
let bottle = 0;
let store = 0;
for (let arr = 0; arr< element.length; arr++){
    let bucket = 0;
    for (let non = 1; non< element[arr]; non++){
        if (element[non] == element[arr]){
            bucket+= 1;
        }
        if (bucket > bottle){
            bottle = bucket;
            store = element[arr];
        }
    }
}
console.log(store)