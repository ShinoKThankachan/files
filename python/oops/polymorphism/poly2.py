class school:
    def __init__(self,sname):
        self.schoolname=sname
        print('school')
    def teacher(self):
        print('teacher')
class std(school):
    def __init__(self, sname,splace):
        super().__init__(sname)
        self.splace=splace
        print('std details')
    def teacher(self):
        super().teacher()
        print('teacher2')
std1=std("synnefo","ernakulam")
std1.teacher()
print(std1.schoolname)
print(std1.splace)