function countBs(number){
    let letter = 0;
    for (let b = 0; b < number.length-1; b++){
        if (number[b] == "B"){
            letter++;
    }
    return letter;
}
}
console.log(countBs("Bobo"));