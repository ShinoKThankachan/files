import os
foldername=input("Enter the name of the folder:")
os.mkdir(foldername)
filename=input("Enter the filename:")
f=open(foldername+'/'+filename,'w')