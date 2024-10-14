nsum=0
esum=0
osum=0
for i in range(11):
    nsum=nsum+i
    if(i%2==0):
        esum=esum+i
    else:
        osum=osum+i
print("sum of n natural number:",nsum)
print("sum of even numbers:",esum)
print("sum of odd numbers:",osum)