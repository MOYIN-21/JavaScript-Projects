function make(get){
    let line = "";
    for(let i = 1; i<7; i++){
        for(let j = 0; j <i; j++){
            line+="#";
        }
        line+="\n";
    }
    return line + "\n";
}s
console.log(make(7));

