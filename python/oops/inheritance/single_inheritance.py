class school:
    def notes():
        print('python','java')
    def teachers():
        print('a','b')
class student(school):
    def house():
        print('qwer')
std1=student
std1.notes()
std1.teachers()
std1.house()
t=school
t.notes()
t.teachers()