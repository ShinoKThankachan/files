def sum():
            a=int(input("enter a number:"))
            b=int(input("enter a number:"))
            c=a+b
            return c
def sub():
            a=int(input("enter a number:"))
            b=int(input("enter a number:"))
            c=a-b
            return c
def mul():
            a=int(input("enter a number:"))
            b=int(input("enter a number:"))
            c=a*b
            return c
def div():
            a=int(input("enter a number:"))
            b=int(input("enter a number:"))
            c=a/b
            return c

while(True):
    uc=int(input('''
                    1.Addition
                    2.substraction
                    3.multiplication
                    4.division
                    5.exit
                    Enter a choice:'''))
    if uc==1:
        sum=sum()
        print(sum)
    elif uc==2:
        
        sub=sub()
        print(sub)
    elif uc==3:
        
        mul=mul()
        print(mul)
    elif uc==4:
        
        div=div()
        print(div)
    elif uc==5:
        break 