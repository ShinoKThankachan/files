l=[8,9,5,6,3,4,2,1,7]
length=len(l)
for i in range(length):
    s=i
    for j in range(i+1,length):
        if l[j]<l[s]:
            s=j
    l[i],l[s]=l[s],l[i]
print("Sorted list in ascending order:",l)
print("Smallest element:",l[0])
