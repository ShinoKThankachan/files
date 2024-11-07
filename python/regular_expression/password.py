import re
a=input("Enter your password:")
res=re.search('[A-Z].{7}',a)
if res:
    print("password is srong")
else:
    print("password is weak")