num=5
for i in range(1,num+1):
    if i<=3:
        for j in range(1,i+1):
            print(j,end=" ")
    else:
        for j in range(1,num-i+2):
            print(j,end=" ")
    print()