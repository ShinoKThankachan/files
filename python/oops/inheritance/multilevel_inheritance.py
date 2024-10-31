class school:
    def name(self):
        print('Asd')
class classroom(school):
    def teacher(self):
        print('bcd')
class student(classroom):
    def notes(self):
        print("python")
std1=student()
std1.name()
std1.teacher()
std1.notes()