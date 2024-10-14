a=int(input("enter number:"))
for i in range(a):
    b=a%10
    a=a//10
    if b!=0:
        print(b,end="")