student=[]
while(True):
    a=int(input('''        1.add student
        2.show all student
        3.search student
        4.delete
        5.exit
        enter your choice:'''))
    if (a==1):
        b=int(input("how many students you want to add:"))
        for i in range(b):
            adno=int(input("enter admission number:"))
            stdname=input("enter student name:")
            age=int(input("enter student age:"))
            place=input("enter student place:")
            student.append([adno,stdname,age,place])
        print(student)
        
    elif(a==2):
        for i in student:
            print(i)
    elif(a==3):
        adno=int(input("enter admission number:"))
        for i in student:
            if i[0]==adno:
                print("student found",i)
                
            else:
                print("student not found")
    elif(a==4):
        adno=int(input("enter admission number:"))
        for i in student:
            if i[0]==adno:
                student.remove(i)
                print("Student deleted:", i)
                break
            else:
                print("student not found")
    else:
        print("exit")
        break

            


    