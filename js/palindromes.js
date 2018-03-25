/*
Another code for palindromes: https://github.com/akto/algorithms-problem-solving/blob/master/projecteuler-largest-palindrome.js
@ Author: Egemen Akto
@ Description: Script to get an array of palindrome numbers to given argument

*/

function palindromes( num ){
    var arr = [];
    while( num > 0 ){
        let numString = num.toString();
        if( isPalindrome(numString) ){ 
          arr.push( num ); 
        }
        num--;
    }  
    return arr;
}

function isPalindrome(str){
  return str === str.split('').reverse().join('');
}

console.clear();
palindromes( 9999 );