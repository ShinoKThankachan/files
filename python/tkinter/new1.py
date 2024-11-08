import tkinter

win=tkinter.Tk()
win.title('new')
win.geometry('300x300')
win.minsize(300,300)
win.maxsize(400,400)
win.config(background="blue")

def data():
    check1=v1.get()
    check2=v2.get()
    check3=v3.get()
    
    print(check1,check2,check3)
    
    
    
v1=tkinter.IntVar()
v2=tkinter.IntVar()
v3=tkinter.IntVar()
c1=tkinter.Checkbutton(win,variable=v1)
c2=tkinter.Checkbutton(win,variable=v2)
c3=tkinter.Checkbutton(win,variable=v3)
c1.pack()
c2.pack()
c3.pack()
f1=tkinter.IntVar()
f2=tkinter.IntVar()
r1=tkinter.Radiobutton(win,variable=f1)
r2=tkinter.Radiobutton(win,variable=f2)
r1.pack()
r2.pack()
b1=tkinter.Button(win,text="submit",background='yellow',foreground='black',padx=2,pady=2,command=data)
b1.pack()
win.mainloop()