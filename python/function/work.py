while(True):
    uc=int(input('''
                    1.Addition
                    2.substraction
                    3.multiplication
                    4.division
                    5.exit
                    Enter a choice:'''))
    if uc==1:
        def sum():
            a=int(input("enter a number:"))
            b=int(input("enter a number:"))
            c=a+b
            return c
        sum=sum()
        print(sum)
    elif uc==2:
        def sub():
            a=int(input("enter a number:"))
            b=int(input("enter a number:"))
            c=a-b
            return c
        sub=sub()
        print(sub)
    elif uc==3:
        def mul():
            a=int(input("enter a number:"))
            b=int(input("enter a number:"))
            c=a*b
            return c
        mul=mul()
        print(mul)
    elif uc==4:
        def div():
            a=int(input("enter a number:"))
            b=int(input("enter a number:"))
            c=a/b
            return c
        div=div()
        print(div)
    elif uc==5:
        break 