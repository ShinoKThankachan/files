a=int(input("enter number:"))
rev=0
while(a>0):
    rem=a%10
    rev=rev*10+rem
    a=a//10
print("reversed number:",rev)