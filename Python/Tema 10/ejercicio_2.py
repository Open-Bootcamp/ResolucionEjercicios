from tkinter import *
master = Tk()
elemento = StringVar()
listbox = Listbox(master)
for item in ["Pepe", "María", "Ernesto", "Ruben", "Carlos", "Laura", "Ana", "Lorena"]:
 listbox.insert(END, item)
listbox.pack()
label = Label(text="Lista de nombres de personas")
label.pack()
master.mainloop()