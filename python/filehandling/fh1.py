try:
    f=open('/home/novavi/Desktop/shino/files/python/filehandling/sample.txt','x')    

except:
    print("file exists")
# f=open('/home/novavi/Desktop/shino/files/python/filehandling/sample.txt','w')

# f.write("welcome")
# f=open('/home/novavi/Desktop/shino/files/python/filehandling/sample.txt','w')
# f.write("good morning")
# f=open('/home/novavi/Desktop/shino/files/python/filehandling/sample.txt','a')
# f.write(" Good morning")
f=open('/home/novavi/Desktop/shino/files/python/filehandling/sample.txt','r')
# a=f.read(3)
# b=f.read()
# print(a)
# print(b)
c=f.readline(3)
e=f.tell()
f.seek(0)
d=f.readlines()
print(c)
print(e)
print(d)