try:
    f=open('/home/novavi/Desktop/shino/files/python/filehandling/work1.txt','x')
except:
    print("file exists")
a=int(input("Enter the limit:"))
f=open('/home/novavi/Desktop/shino/files/python/filehandling/work1.txt','w')
for i in range(a):
    b=input("Enter the name:")
    f.write(b+'\n')
f=open('/home/novavi/Desktop/shino/files/python/filehandling/work1.txt','r')
c=f.readlines()
for i in c:
    rev=""
    for j in i:
        rev=j+rev
    print(rev)
