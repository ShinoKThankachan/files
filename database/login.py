import sqlite3

con=sqlite3.connect("/home/synnefo/Desktop/shino/files/database/alpha.db")
username=input("enter username:")
password=input("enter password:")


data=con.execute("select * from employee")
for i in data:
    if i[5]==username and i[6]==password:
        print("login successfull")
    else:
        print("invalid username or password")