import sqlite3
 

con=sqlite3.connect("/home/synnefo/Desktop/shino/files/database/alpha.db")

try:
    con.execute("create table employee(id int,name text,age int,email text,phone int,username text,password string)")
    
except:
    pass
a=int(input("Enter how many employee you want to add:"))
for i in range(a):
    id=int(input("Enter Employee id:"))
    name=input("Enter Employee name:")
    age=int(input("Enter Employee age:"))
    email=input("Enter Employee Email:")
    phone=int(input("Enter Employee Phone number:"))
    username=input("Enter Employee Username:")
    password=input("Enter Employee Password:")
    con.execute("insert into employee values(?,?,?,?,?,?,?)",(id,name,age,email,phone,username,password))
    con.commit()

# data=con.execute("select * from employee")
# for i in data:
#     print("{:<20}{:<20}{:<20}{:<20}{:<20}{:<20}{:<20}".format(i[0],i[1],i[2],i[3],i[4],i[5],i[6]))

