/* 
    File: merge-sort.js
    Author: Nathan Page
    Date: September 1, 2021
*/

// Pseudocode 
/*  
    1. Split array into equal halves 
    2. Recursively spilt subarrays into equal halves
    3. Stop splitting at base case (array length = 1)
    4. Merge subarrays in sorted order until output array length == input array length 
    
*/
 
// Running time is the number of lines of code that need to be executed to finish operation 
/* 
    Claim: Merge sorts uses at most 6n*log(n)*n+6n operations for an array of length n
*/

// Level of recursion 
/* 
                O       Root
            /      \
            |       |
            O       O
            /\      /\
           /  \    /  \
          O    O  O   O     ... base 2 log (n) levels for array size of n


2^j number of subproblems each of size n/2^j 

total work = # of level j subprobs x subprob size at j 
work = 2^j *6*n/2^j = 6*n
*/

let A =  [1,5,3,8,9]
let B =  [4,7,0,12,11]


A.sort((a,b)=> {return a-b})
B.sort((a,b)=> {return a-b})


function merge(left,right){
  
    var c = []



    
}