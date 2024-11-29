Array.prototype.count = function( countedItem ){
    let j = 0,
        k = 0;
    for(j;j<=this.length;j++){
        this[j] === countedItem ? k++ : k ;
    }
    return k;
};

let array1 = [false, true, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false]; // 3 of 21 is true
let array2 = [12,3,45,25,36,3,25,24,3,5,24,15,3,14,3,5,35,3,47,3,98,65,3,785,65,3,11,3];
let array3 = ["ege","ada","afa","odo","udu","aga","ogo","ege","efe","igi","ege"];

console.log( array1.count(true) );
console.log( array2.count(3) );
console.log( array3.count("ege") );
console.log( array3.count(2) );
