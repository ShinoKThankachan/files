a=int(input("enter a number:"))
lastdigit=a%10
if(lastdigit%3==0):
    print(lastdigit,"divisible by 3")
else:
    print(lastdigit,"is not divisible by 3")