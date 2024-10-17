a=int(input("enter your unit:"))
if(a<=100):
    print("no charge")
elif(a<=200):
    c=5*(a-100)
    print(c)
elif(a>200):
    c=a-200
    result=(c*10)+500
    print(result)
else:
    print("none of these")
