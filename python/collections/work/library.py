library=[]
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
                    books=[]
                    bn=int(input("enter book number:"))
                    f=input("enter book name:")
                    g=input("enter author:")
                    h=float(input("enter book price:"))
                    books.append([bn,f,g,h])
                    print(books)
                elif adm==2:
                    update_books=[]
                    up=int(input('''
                                1.update book name
                                2.update book price
                                3.go back
                                enter your choice:'''))
                    if up==1:
                        bkn=input("enter updated book name:")
                        update_books.append([bkn])
                    elif up==2:
                        bp=input("enter updated book price:")
                        update_books.append([bp])
                    elif up==3:
                        break
                    if adm==3:
                        
                        print(library)
        else:
            print("username or password error")