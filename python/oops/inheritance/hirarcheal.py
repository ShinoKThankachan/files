class school:
    def name(self):
        print('Asd')
class teacher(school):
    def subject(self):
        print('python')
class student(school):
    def notes(self):
        print("java")
std1=student()
t=teacher()
std1.name()
std1.notes()
t.name()
t.subject()