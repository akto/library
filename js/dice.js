class dice{
    constructor(name, sides){
        this.diceName = name;
        this.sideNumber = sides;
    }
    roll(){
        return Math.floor( Math.random()*this.sideNumber + 1 );
    }
}

Array.prototype.count = function( countedItem ){
    let j = 0,
        k = 0;
    for(j;j<=this.length;j++){
        this[j] == countedItem ? k++ : k ;
    }
    return k;
};
console.clear();
//[true,false,false,,true,false,false,true,false,false].count(false);

let sixSided1 = new dice("1st Six Sided Dice",6);
let sixSided2 = new dice("2nd Six Sided Dice",6);

//console.log( sixSided1.roll() );
//console.log( sixSided2.roll() );

let i = 0,
    maxSpecimen = 300;
let totalNumberOfDices = Math.floor( Math.random()*maxSpecimen + 1 );
let arr = [];
for(i;i<totalNumberOfDices;i++){
   arr.push( sixSided1.roll() == sixSided2.roll() );
}
console.log(arr);
console.log( 
    " The number of True checks for the array above is: " + arr.count(true) +
    " out of "+ arr.length+
    " percentage of the true items is: % " + Math.round( (arr.count(true)/arr.length)*100
) );
