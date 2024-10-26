while(True):
    uc=int(input('''
                    1.Addition
                    2.Substraction
                    3.Multiplication
                    4.Division
                    5.exit
                    Enter your choice:'''))
    if uc==1:
        from add import add
        add=add()
        print(add)
    elif uc==2:
        from sub import sub
        sub=sub()
        print(sub)
    elif uc==3:
        from mul import mul
        mul=mul()
        print(mul)
    elif uc==4:
        from div import div
        div=div()
        print(div)
    elif uc==5:
        break
    else:
        print("invalid choice")

