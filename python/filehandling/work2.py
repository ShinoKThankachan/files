try:
    f=open('/home/novavi/Desktop/shino/files/python/filehandling/work2.txt','x')
except:
    print("file exists")
a=int(input("Enter the limit:"))
f=open('/home/novavi/Desktop/shino/files/python/filehandling/work2.txt','w')
for i in range(1,11):
    for j in range(1,a+1):
        f.write(str(i)+'*'+str(j)+'='+str(i*j)+'\t')
    f.write('\n')
        

