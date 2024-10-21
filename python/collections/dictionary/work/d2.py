num=int(input("Enter a number:"))
d={1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine"}
i=0
a=""
while num>0:
    i=num%10
    num=num//10
    a=d[i]+" "+a
print(a)