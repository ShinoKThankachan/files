import re
a=input("Enter your password:")
res=re.search("(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}",a)
if res:
    print("password is srong")
else:
    print("password is weak")