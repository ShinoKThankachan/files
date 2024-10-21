l=['name','age','place']
d=dict.fromkeys(l,"null")
d.update({'name':'riju'})
d.update({'age':20})
d.update({'place':"kottayam"})
print(d.get("name"))
print(d)
