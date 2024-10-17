a=int(input("enter your bike price:"))
if(a>100000):
    tax=0.15*a
    print(a,"rs","tax=",tax)
elif(a>50000 and a<=100000):
    tax=0.10*a
    print(a,"rs","tax=",tax)
elif(a<=50000):
    tax=0.05*a
    print(a,"rs","tax=",tax)
else:
    print("invalid input")
    