l=[]
def add():
                a=int(input("how many students you want to add:"))
                for i in range(a):
                    s={}
                    b=int(input("enter student id:"))
                    c=input("enter student name:")
                    d=int(input("enter student age:"))
                    s['id']=b
                    s['name']=c
                    s['age']=d
                    l.append(s)
                    return add()