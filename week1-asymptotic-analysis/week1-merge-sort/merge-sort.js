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
            |        |
            O        O
            /\      /\
           /  \    /  \
          O    O  O    O     ... base 2 log (n) levels for array size of n


2^j number of subproblems each of size n/2^j 

total work = # of level j subprobs x subprob size at j 
work = 2^j *6*n/2^j = 6*n
*/

function merge(left,right){  
    
    let temp = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            temp.push(left.shift())  
        } else {
            temp.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements into the output array
    // (in case we didn't go through the entire left or right array)
    let output = [ ...temp, ...left, ...right ]
    return output
}

function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    let sorted = merge(mergeSort(left),mergeSort(array))
    return sorted
  }


  // Run merge sort algorithm on arr1
  let arr1 =  [1,12,34,3,2,54,664,451,78,6984,3245,67,62,324,6,34,6655,27,8,456,66,446,45,664,56,634,98,7,4,63,44,197,5]
  randArr = []
  for(let i =0; i < 10000; i++){
    randArr[i] = Math.random()*10000;
  }

  console.log('Sorted array:', mergeSort(randArr));