a=int(input("enter your year of service:"))
b=int(input("enter your salary:"))
if(a>5):
    c=(0.05*b)+b
    print("Net bonus",c)
else:
    print("you have no bonus",b)