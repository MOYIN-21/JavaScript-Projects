const non = function(value){
    let max = value[0];
    for(let i = 0; i <= value.length; ++i){
        if(value[0]> max) max = value[i];
    }
    console.log(max)
}
non([2, 3, 89,67])