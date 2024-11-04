# try:
#     f=open('/home/novavi/Desktop/shino/files/python/filehandling/demo.txt','x')
# except:
#     print('file exists')
# f=open('/home/novavi/Desktop/shino/files/python/filehandling/demo.txt','r')
# print(f.readlines())
# f=open('/home/novavi/Desktop/shino/files/python/filehandling/demo.txt','r')
# line=len(f.readlines())
# print(line)
# f=open('/home/novavi/Desktop/shino/files/python/filehandling/demo.txt','r')
# word=0
# a=f.read()
# b=a.split()
# word+=len(b)
# print(word)
# f=open('/home/novavi/Desktop/shino/files/python/filehandling/demo.txt','r')
# count=0
# for i in f:
#     for j in i:
#         if j.isalpha():
#             count+=1
# print(count)
# f=open('/home/novavi/Desktop/shino/files/python/filehandling/demo.txt','r')
# capcount=0
# smcount=0
# for i in f:
#     for j in i:
#         if j.isupper():
#             capcount+=1
#         elif j.islower():
#             smcount+=1
        
# print('capital letters',capcount)
# print('small letters',smcount)




    
f=open('/home/novavi/Desktop/shino/files/python/filehandling/demo.txt','r')
a=f.readlines()
print('lines',len(a))
f.seek(0)
letter=0
u_letter=0
word=0
for i in range(len(a)):
    b=f.readline().strip()
    word+=len(b.split())
    for j in b:
        if j!=' ':
            if j.isupper():
                u_letter+=1
            letter+=1
print('letter',letter)
print('upper letter',u_letter)
print('small letter',letter-u_letter)
print('word',word)