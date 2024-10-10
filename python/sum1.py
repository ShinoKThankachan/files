i=1
sum=0
esum=0
osum=0
while(i<=10):
    sum=sum+i
    
    if(i%2==0):
        esum=esum+i
    elif(i%2!=0):
        osum=osum+i
    i+=1
print("sum of natural:",sum)
print("sum of even:",esum)
print("sum of odd:",osum)



    