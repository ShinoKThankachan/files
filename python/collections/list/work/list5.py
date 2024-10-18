l=[100,200,300,100]
print(l)
a=int(input("enter a value from list:"))
count=l.count(a)
print(count)
length=len(l)
l2=[]
for i in range(length):
    if l[i]==a:
        l2.append(i)
print(l2)


