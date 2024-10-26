l=[]
def delete():
            e=int(input("enter student id:"))
            for i in l:
                i['id']==e
                l.remove(i)
                return delete()