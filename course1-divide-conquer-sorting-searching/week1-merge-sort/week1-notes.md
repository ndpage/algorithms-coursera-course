 # Week 1 notes - Divide and Conquer, Merge Sort
    Author: Nathan Page
    Date: September 1, 2021

## Pseudocode 
 
    1. Split array into equal halves 
    2. Recursively spilt subarrays into equal halves
    3. Stop splitting at base case (array length = 1)
    4. Merge subarrays in sorted order until output array length == input array length 


    

 
## Running time is the number of lines of code that need to be executed to finish operation 

    **Claim: Merge sorts uses at most 6n*log(n)*n+6n operations for an array of length n**


## Level of recursion 
 
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

## Ignoring to constant factors, lower-order terms
 > Justifications:
 > * Way easier to analyze
 > * constants depend on architecture/compiler/programmer
 > * lose very little predictive power


## Asymptotic Analysis 

    > Focus on running time for LARGE in puts sizes n
    > Example:6n*log(n) + 6n better than 1/2*n^2
    > Justification: Merge sort is "better" than others (insersion, selection) for LARGE data sizes

    for smaller n, the algorithm with smaller constant factors will be "faster"

    ** Fast Algorithm = WORST-CASE RUNNING TIME FROWS SLOWLY WITH INPUT SIZE **

    "Sweet spot" : matheematical tractability and predictive power

    Holy grail: linear runnning time given input size (or as close as possible

### The Gist
**Asymptotic analysis is _the_ way programmers communicate the performance of algorithms**

Big Oh notation is used to quickly and efficiently convey the performace of a specific algorithm

High-Level Idea: Suppress constant factors and l ower-order terms.

> Example: equate `6n log(n) + 6n` with just `nlog(n)`

Terminology: running itme is `O(nlogn)` where n equals to input size (e.g. array length, etc.)

## Examples
Claim: If T(n) = `a_k*n^k+.....+a_1*n+a*0`
#### Example 1: One loop
Problem: Search array A for an integer t
_Pseudocode_
```
for i = 1 to n
    if A[i] == t return true
    return false
```
**Answer: performance is O(n)**
The running time of this algorithm is linear with the input n

#### Example 2: Two loops
Problem: given two arrays, A and B, of length n find integer t
_Pseudocode_
```
for i = 1 to n
    if A[i] == t return true
    return false
    if B[i] == t return true
    return false
```
**Answer: performance is also O(n)**

#### Example 3: Two Nested Loops
Problem: given two arrays A and B of length n, find a number in common

```
for i =1 to n
    for j = 1 to n
        if A[i] == B[i] return true
return false
```


**Answer: Running time is `O(n^2)`**

This is a _quadratic_ running time algorithm (i.e. n^2)

#### Example 4: Two Nested Loops (1 array)

Problem: does array A have a duplicate entry/value?

```
for i =1 to n
    for j = 1 to n
        if A[i] == A[i] return true
return false
```
**Answer: running time is O(n^2)**

### Different Notation
Big-Oh: Less than or equal to (<=)
Big-Omega is equivalent to greater than or equal to (>=)
Big-Theta: analagous to equal to (==)

**Little-Oh** Strictly _less than_ 
Def: `T(n) <= c * f(n)`  for all c0 

Exercise: for all k>= 1, n^k-1 = o(n^k)

