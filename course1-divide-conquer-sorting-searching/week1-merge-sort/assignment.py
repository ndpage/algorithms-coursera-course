# Katasuba multiplication

import math

def first_n_digits(num, n):
    return num // 10 ** (int(math.log(num, 10)) - n + 1)

def last_n_digits(num, n):
    return reverse_number(first_n_digits(reverse_number(num),n))

def reverse_number(num):
    # Initiate value to null  
    revs_num = 0  
  
    # reverse the integer number using the while loop  
    while (num > 0):  
        # Logic  
        remainder = num % 10  
        revs_num = (revs_num * 10) + remainder  
        num = num // 10
    return revs_num


number = 1234567
length = len(str(number))

first = math.ceil(length/2)

print(first)
last = length - first
print(last)

print(first_n_digits(number, first))
print(last_n_digits(number, last))
