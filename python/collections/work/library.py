library=[]
customers=["riju","john","aswin"]
while(True):
    a=int(input('''
            1.Admin
            2.User
            3.exit
            enter your choice:'''))
    if a==1:
        b=["admin"]
        c=["admin@123"]
        d=input("enter username:")
        e=input("Enter password:")
        if (d in b and e in c):
            while(True):
                adm=int(input('''
                            1.Add Books
                            2.Update Book
                            3.Show all Books
                            4.Delete Book
                            5.View Customers
                            6.Log out
                            enter your choice:'''))
                if adm==1:
                    
                    hb=int(input(("how many books you want to add:")))
                    for i in range(hb):
                        bn=int(input("enter book number:"))
                        f=input("enter book name:")
                        g=input("enter author:")
                        h=float(input("enter book price:"))
                        library.append([bn,f,g,h])
                    print(library)
                    
                elif adm==2:
                    
                    up=int(input('''
                                1.update book name
                                2.update book price
                                3.go back
                                enter your choice:'''))
                    if up==1:
                        print(library)
                        bn=int(input("enter book number:"))
                        for i in library:
                            if i[0]==bn:
                                bkn=input("enter updated book name:")
                                i[1]=bkn
                                print(library)
                                
                    elif up==2:
                        print(library)
                        bn=int(input("enter book number:"))
                        for i in library:
                            if i[0]==bn:
                                bp=input("enter updated book price:")
                                i[3]=bp
                                print(library)
                                
                    elif up==3:
                        break
                elif adm==3:
                    
                    
                    print(library)
                elif adm==4:
                    db=int(input("enter book number:"))
                    for i in library:
                        if i[0]==db:
                            library.remove(i)
                            print("book deleted")
                            print(library)
                            break
                        else:
                            print("book not found")
                elif adm==5:
                    print(customers)
                elif adm==6:
                    print("logging out")
                    break
        else:
            print("username or password error")
    elif a==2:
        lend=[]
        
        us=int(input('''
                    1.Register
                    2.log in
                    enter your choice:'''))
        
        if us==1:
            usn=input("enter username:")
            usp=input("enter password:")
        elif us==2:
            usname=input("enter username:")
            uspwd=input("enter password:")
            if (usname==usn and uspwd==usp):
                usop=int(input('''
                                1.View book
                                2.Lend book
                                3.Return book
                                4.Book in hand
                                5.log out
                                Enter your choice:'''))
                if usop==1:
                    print(library)
                       
                elif usop==2:
                    print(library)
                    le=int(input("Enter book number:"))
                    for i in library:
                        if i[0]==le:
                            lend.append(i)
                            library.remove(i)
                            print(lend)
                        else:
                            print("Book not found")
                        
                elif usop==3:
                    print(lend)
                    re=int(input("Enter book number to return:"))
                    for i in lend:
                        if i[0]==re:
                            library.append(i)
                            print(library)
                        
                elif usop==4:
                    print("Book on your hand",lend) 
                        
                elif usop==5:
                    print("logging out")
                break
                    
            else:
                print("Username or password error")
                
                  
        
    elif a==3:
        print("Exiting")
        break