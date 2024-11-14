import sqlite3

con=sqlite3.connect("/home/synnefo/Desktop/shino/files/database/data.db")

try:
    con.execute("create table employee(id int, name text,age int,email text,phone int,username text,password string)")
    con.commit()
except:
    pass

# a=int(input("Enter how many employee you want to add:"))
# for i in range(a):
#     id=int(input("Enter Employee id:"))
#     name=input("Enter Employee name:")
#     age=int(input("Enter Employee age:"))
#     email=input("Enter Employee Email:")
#     phone=int(input("Enter Employee Phone number:"))
#     username=input("Enter Employee Username:")
#     password=input("Enter Employee Password:")
#     con.execute("insert into employee values(?,?,?,?,?,?,?)",(id,name,age,email,phone,username,password))
#     con.commit()
# data=con.execute("select * from employee where username='hari'")
# for i in data:
#     print(i)

# data=con.execute("select id,name,phone from employee where username='hari'")
# for i in data:
#     print(i)

data=con.execute("select * from employee")
print("{:<20}{:<20}{:<20}{:<20}{:<20}{:<20}{:<20}".format("Id","Name","Age","Email","Phone","Username","Password"))
print("_"*130)
for i in data:
    print("{:<20}{:<20}{:<20}{:<20}{:<20}{:<20}{:<20}".format(i[0],i[1],i[2],i[3],i[4],i[5],i[6]))
    print("_"*130)
c=con.execute("select count(*) from employee")
for i in c:
    print(i)
s=con.execute("select sum(age) from employee")
for i in s:
    print(i)
a=con.execute("select avg(age) from employee")
for i in a:
    print(i)
m=con.execute("select min(age) from employee")
for i in m:
    print(i)
d=con.execute("select max(age) from employee")
for i in d:
    print(i)