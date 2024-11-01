schools=['a','b']
students=['riju']
teachers=['abc']

class school:
    def add():
        n=input("Enter school name:")
        schools.append(n)
        print(schools)
    def s():
        print(schools)
class student:
    def stud():
        std=input("enter student name:")
        students.append(std)
        print(students)
    def sh():
        print(students)
class teacher:
    def t():
        t=input("enter teacher number:")
        teachers.append(t)
        print(teachers)
    def sho():
        print(teachers)
class main(school,student,teacher):
    def show():
        print("schools:",schools,"students:",students,"teachers:",teachers)
obj=main
while(True):
    uc=int(input('''
                    1.Add
                    2.show
                    3.exit
                    Enter your choice:'''))
    while(True):
        if uc==1:
            # print(school,student,teacher)
            us=int(input('''
                            1.add school
                            2.add student
                            3.add teacher
                            4.go back
                            Enter your choice:'''))
            if us==1:
                obj.add()
            elif us==2:
                obj.stud()
            elif us==3:
                obj.t()
            elif us==4:
                break
        elif uc==2:
            ch=int(input('''
                        1.show schools
                        2.show students
                        3.show teachers
                        4.show all
                        5.go back
                        enter your choice:'''))
            if ch==1:
                obj.s()
            elif ch==2:
                obj.sh()
            elif ch==3:
                obj.sho()
            elif ch==4:
                obj.show()
            elif ch==5:
                break
        elif uc==3:
            break
        else:
            print('invalid choice')
            
