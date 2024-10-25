# l=[1,2,3,4,5,6,7,8,9]
# res=list(filter(lambda x:x%2==0,l))
# print(res)

l=[1,2,3,4,5,6,7,8,9]
def even (x):
    return x%2==0
res=list(filter(even,l))
print(res)