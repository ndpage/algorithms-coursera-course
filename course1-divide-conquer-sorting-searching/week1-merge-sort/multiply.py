
def multiply(num1, num2):
    if num1 == 0 or num2 == 0:
        return 0
    if num1 == 1:
        return num2
    
    return multiply(num1-1,num2)+num2


print("multiply.py")

a = int(input("input first number: "))
b = int(input("input second number: "))

print("Product of",a,"and", b, "is", multiply(a,b))



