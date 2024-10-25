# l=[1,2,3,4,5]
# res=list(map(lambda x:x*x,l))
# print(res)

l=[1,2,3,4,5]
def square(x):
    return x*x
res=list(map(square,l))
print(res)