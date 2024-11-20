import mysql.connector

mydb=mysql.connector.connect(
    host='localhost',
    user='Shino',
    password='shino@2002',
    database='sample',
)
mycursor=mydb.cursor()

try:
    mycursor.execute("create database sample")
except:
    pass

