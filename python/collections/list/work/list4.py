l=[3,6,8,9,5]
a=int(input("enter number:"))

for i in l:
    if a not in l:
        l.append(a)
        print(l)
    else:
        print("duplicate value")
    
