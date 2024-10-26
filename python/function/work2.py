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
def delete():
            e=int(input("enter student id:"))
            for i in l:
                i['id']==e
                l.remove(i)
while(True):
    uc=int(input('''
                1.Add Students
                2.Delete Student
                3.show all student
                4.exit
                enter your choice:'''))
    if uc==1:
        
        add()
        print(l)
    elif uc==2:
        delete()
        print(l)
    elif uc==3:
        print(l)
    elif uc==4:
        print("exiting")
        break
            
    


