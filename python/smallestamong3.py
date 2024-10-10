a=int(input("enter first number:"))
b=int(input("enter second number:"))
c=int(input("enter third number:"))
if(a<b):
    if(a<c):
        print(a,"is smallest")
    else:
        print(c,"is smallest")
else:
    if(b<c):
        print(b,"is smallest")
    else:
        print(c,"is smallest")