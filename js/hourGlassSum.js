/*
//MY ABSOLUTE BRUTE FORCE SOLUTION. IT'S UGLY BUT I CAN MANAGE TO MAKE IT BETTER LATER
function compareNumbers(a, b) {return a - b;}

function hourglassSum(arr) {
    let length = arr.length, sumArr = [];
    const pattern = [[0,1,2],[1],[0,1,2]];
    for( let i = 0; i < length; i++){
        for( let j = 0; j < arr[i].length; j++){
            let sum = 0;
            if( j+3 <= length && i+3 <=length ){
                sum = arr[i][j+pattern[0][0]] + arr[i][j+pattern[0][1]]+ arr[i][j+pattern[0][2]]+arr[i+1][j+pattern[1][0]]+arr[i+2][j+pattern[2][0]] + arr[i+2][j+pattern[2][1]]+ arr[i+2][j+pattern[2][2]];
                sumArr.push(sum);
                console.log( arr[i][j+pattern[0][0]] +' '+ arr[i][j+pattern[0][1]]+' '+ arr[i][j+pattern[0][2]] );
                console.log( arr[i+1][j+pattern[1][0]] );
                console.log( arr[i+2][j+pattern[2][0]] +' '+ arr[i+2][j+pattern[2][1]]+' '+ arr[i+2][j+pattern[2][2]] );
            }
        }
    }
    sumArr.sort(compareNumbers);
    return sumArr[sumArr.length-1]);
}

const exampleArray = [
                     [-9,-9,-9,1,1,1],
                     [0,-9,0,4,3,2],
                     [-9,-9,-9,1,2,3],
                     [0,0,8,6,6,0],
                     [0,0,0,-2,0,0],
                     [0,0,1,2,4,0]
                     ];
//console.log(exampleArray);
hourglassSum(exampleArray);
*/

//Es6 usage of a simple function
const compareNumbers = (a,b) => a-b;

function hourglassSum(arr) {
    let length = arr.length, sumArr = [];
    // Hourglass pattern as an array
    const pattern = [[0,1,2],[1],[0,1,2]];
    for( let i = 0; i < length; i++){
        for( let j = 0; j < arr[i].length; j++){
            let sum = 0;
            if( j+3 <= length && i+3 <=length ){
		            // Loop through pattern
                pattern.map(
                    (elem, key) => {
                        //console.log(elem,key);
                        // I need to loop inside pattern
                        elem.map(
                            ( el, ke ) => {
                                sum += arr[i+key][j+el];
                                //console.log( `Arr: ${arr[i+key][j+el]}` );
                            }
                        );
                        
                    }
                );
                sumArr.push(sum);
            }
        }
        
    }
    sumArr.sort(compareNumbers);
    //console.log(sumArr);
    return sumArr[sumArr.length-1];
}

const exampleArray = [
                     [-9,-9,-9,1,1,1],
                     [0,-9,0,4,3,2],
                     [-9,-9,-9,1,2,3],
                     [0,0,8,6,6,0],
                     [0,0,0,-2,0,0],
                     [0,0,1,2,4,0]
                     ];
//console.log(exampleArray);
hourglassSum(exampleArray);
