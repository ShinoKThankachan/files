python={'akshay','vishnu','sreehari'}
java={'shino','hari','akshay','sreehari'}
javascript={'jofiya','sreehari','hari','aadhith','riju'}
while(True):
    a=int(input('''                    1.common in all
                    2.common in python and java
                    3.common in java and javascript
                    4.uncommon students
                    5.exit
                    enter your choice:'''))

    if(a==1):
        print(python.intersection(java,javascript))
    elif(a==2):
        print(python.intersection(java))
    elif(a==3):
        print(java.intersection(javascript))
    elif(a==4):
        b=set(python.symmetric_difference(java))
        c=set(python.symmetric_difference(javascript))
        e=b.union(c)
        print(e)
    elif(a==5):
        print("exiting")
        break
