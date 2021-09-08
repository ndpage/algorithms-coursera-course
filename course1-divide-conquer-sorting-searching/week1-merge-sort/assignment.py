# Katasuba multiplication
# 

import math

def first_n_digits(num, n):
    return num // 10 ** (int(math.log(num, 10)) - n + 1)


# multiplication function using Karatsuba 
def multiply(number1, number2):
    if len(str(number1)) == 1 or len(str(number2)) == 1:
        return number1*number2  
    
    length = max(len(str(number1)),len(str(number2))) # get the max length of number1 and number2
    half = math.ceil(length / 2)
  
    # Determine sub numbers from each number argument  
    a = number1 // 10**(half)
    b = number1 % 10**(half)
    c = number2 // 10**(half)
    d = number2 % 10**(half)
    
    print(''' 
    a {} 
    b {} 
    c {} 
    d {}
    '''.format(a,b,c,d))

    # Calculate each sub product to use in final expression
    ac = multiply(a,c)
    bd = multiply(b,d)
    ad_plus_bc = multiply(a+b,c+d) - ac - bd

    return ac * 10**(2*half) + (ad_plus_bc * 10**half) + bd

num1 = input("enter number 1: ")
num2 = input("enter number 2: ")

try: 
    num1 = int(num1)
    num2 = int(num2)
except:
    print("Please enter an integer number!")
    quit()

print("Product is",multiply(num1,num2))
