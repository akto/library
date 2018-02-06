/*
Another code for palindromes: https://github.com/akto/algorithms-problem-solving/blob/master/projecteuler-largest-palindrome.js
@ Author: Egemen Akto
@ Description: Script to get an array of palindrome numbers to given argument

*/

function palindromes( b ){
    var arr = [];
    while( b > 0 ){
        let bstring = b.toString();
        if( isPalindrome(bstring) ){ 
          arr.push( b );
          //console.log( b ); 
        }
        b--;
    }  
    //console.log( arr );
    return arr;
}

function isPalindrome(str){
  return str === str.split('').reverse().join('');
}

console.clear();
pal( 99*99 );