class synnefo:
    def __init__(self):
        self.name=input("Enter student name:")
        self.age=int(input("Enter student age:"))
        self.address=input("enter student address:")
    def python(self):
        print('python',self.name,self.age,self.address)
    def php(self):
        print('php',self.name,self.age,self.address)
std1=synnefo()
std1.python()
std2=synnefo()
std2.php()