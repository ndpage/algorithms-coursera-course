# Katasuba multiplication
#
import math

# multiplication function using Karatsuba 
def multiply(number1, number2):
    
    # return the product once the number is a single digit
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

# Get user inputs 
num1 = input("enter number 1: ")
num2 = input("enter number 2: ")

# Some error handling 
try: 
    num1 = int(num1)
    num2 = int(num2)
except:
    print("Please enter an integer number!")
    quit()

# Print the resulting product of the two numbers
print("Product is",multiply(num1,num2))
