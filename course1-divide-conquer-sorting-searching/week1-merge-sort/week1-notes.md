 
    File: merge-sort.js
    Author: Nathan Page
    Date: September 1, 2021

** Pseudocode 
 
    1. Split array into equal halves 
    2. Recursively spilt subarrays into equal halves
    3. Stop splitting at base case (array length = 1)
    4. Merge subarrays in sorted order until output array length == input array length 
    

 
** Running time is the number of lines of code that need to be executed to finish operation 

    Claim: Merge sorts uses at most 6n*log(n)*n+6n operations for an array of length n


** Level of recursion 
 
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



** Ignoring to constant factors, lower-oerder terms
 Justifications:
    1. Way easier to analyze
    2. constants depend on architecture/compiler/programmer
    3. lose very little predictive power


** Asymptotic Analysis 

    -> Focus on running time for LARGE in puts sizes n
    Example:6n*log(n) + 6n better than 1/2*n^2
    Justification: Merge sort is "better" than others (insersion, selection) for LARGE data sizes

    for smaller n, the algorithm with smaller constant factors will be "faster"

    >> Fast Algorithm = WORKST-CASE RUNNING TIME FROWS SLOWLY WITH INPUT SIZE <<

    "Sweet spot" : matheematical tractability and predictive power

    Holy grail: linear runnning time given input size (or as close as possible
 