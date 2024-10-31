class synnefo:
    def branch():
        print('mern','python')
class course:
    def python():
        print("python")
class student(synnefo,course):
    def mern():
        print('mern')
std1=student
std1.branch()
std1.python()
std1.mern()