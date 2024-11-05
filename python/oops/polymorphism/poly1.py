class school:
    def __init__(self):
        print('school')
    def teacher(self):
        print('teacher')
class student(school):
    def __init__(self):
        super().__init__()
        print('student details')
    def teacher(self):
        super().teacher()
        print('teacher2')
std1=student()
std1.teacher()