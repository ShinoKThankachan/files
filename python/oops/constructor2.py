class synnefo:
    def __init__(self,branch):
        self.name=input("Enter student name:")
        self.age=int(input("Enter student age:"))
        self.branch=branch
    def python(self):
        print('python',self.name,self.age,self.branch)
    def php(self):
        print('php',self.name,self.age,self.branch)
std1=synnefo('ekm')
std1.python()
std2=synnefo('ktm')
std2.php()