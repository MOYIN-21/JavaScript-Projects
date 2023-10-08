function sumReturn(alive){
    let to = 0;
for(let i = 0; i< alive.length; i++){
    to+=alive[i];
}
return to;
}
let alive = [1, 2, 3, 4, 5]
console.log(sumReturn(alive));