# from functools import reduce
# l=[1,2,3]
# res=reduce(lambda x,y:x+y,l)
# print(res)

from functools import reduce
l=[1,2,3]
def sum(x,y):
    return x+y
res=reduce(sum,l)
print(res)