import sqlite3
 

con=sqlite3.connect("/home/synnefo/Desktop/shino/files/database/omega.db")

try:
    con.execute("create table employee(name text,age int,email text,phone int,username text,password string)")
    
except:
    pass
# a=int(input("Enter how many employee you want to add:"))
# for i in range(a):
#     name=input("Enter Employee name:")
#     age=int(input("Enter Employee age:"))
#     email=input("Enter Employee Email:")
#     phone=int(input("Enter Employee Phone number:"))
#     username=input("Enter Employee Username:")
#     password=input("Enter Employee Password:")
#     con.execute("insert into employee values(?,?,?,?,?,?)",(name,age,email,phone,username,password))
#     con.commit()

data=con.execute("select * from employee")
for i in data:
    print("{:<20}{:<20}{:<20}{:<20}{:<20}{:<20}".format(i[0],i[1],i[2],i[3],i[4],i[5]))

con.execute("update employee set password='arjun@123' where name='arjun'")
con.commit()
try:
    con.execute("delete from employee where password='fhdt6e'")
    con.commit()
except:
    pass