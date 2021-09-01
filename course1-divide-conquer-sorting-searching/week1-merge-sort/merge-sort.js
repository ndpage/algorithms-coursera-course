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


let A =  [1,5,3,8,9]
let B =  [4,7,0,12,11]


A.sort((a,b)=> {return a-b})
B.sort((a,b)=> {return a-b})


function mergeSort(A,B){
    
    let i = 
}