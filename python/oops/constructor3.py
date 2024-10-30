class synnefo:
    def __init__(self,branch):
        
        self.branch=branch
    def python(name,age,branch):
        print('python',name,age,branch)
    def php(name,age,branch):
        print('php',name,age)
std1=synnefo('ekm')
std1.python('s',22)
std2=synnefo('ktm')
std2.php('r',21)