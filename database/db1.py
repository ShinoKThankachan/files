import sqlite3

con=sqlite3.connect("/home/synnefo/Desktop/shino/files/database/students.db")

try:
    con.execute("create table std(admno int,name text,age int,email text)")
except:
    pass
# con.execute("insert into std values(1,'hari',22,'hari123@gmail.com')")
# con.commit()
a=int(input("enter how many students you want to add:"))
for i in range(a):
    admno=int(input("Enter admno of student:"))
    name=input("Enter student name:")
    age=int(input("Enter student age:"))
    email=input("Enter student email:")
    con.execute("insert into std values(?,?,?,?)",(admno,name,age,email))
    con.commit()