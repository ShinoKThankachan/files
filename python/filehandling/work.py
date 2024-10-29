try:
    f=open('/home/novavi/Desktop/shino/files/python/filehandling/work.txt','x')
except:
    print("file exists")
f=open('/home/novavi/Desktop/shino/files/python/filehandling/work.txt','r')
a=f.readlines()
capcount=0
smcount=0
for i in a:
    for j in i:
        if j.isupper():
          capcount+=1
        elif j.islower():
            smcount+=1
print(capcount)
print(smcount)


