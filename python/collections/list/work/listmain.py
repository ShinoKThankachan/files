student=[]
while(True):
    a=int(input('''        1.add student
        2.show all student
        3.search student
        4.delete
        5.exit
        enter your choice:'''))
    if (a==1):
        b=int(input("how many students you want to add:"))
        for i in range(b):
            adno=int(input("enter admission number:"))
            stdname=input("enter student name:")
            age=int(input("enter student age:"))
            place=input("enter student place:")
            student.append([adno,stdname,age,place])
        print(student)
        
    elif(a==2):
        for i in student:
            print(i)
    elif(a==3):
        adno=int(input("enter admission number:"))
        for i in student:
            if i[0]==adno:
                print("student found",i)
                break
            else:
                print("student not found")
    elif(a==4):
        adno=int(input("enter admission number:"))
        for i in student:
            if i[0]==adno:
                student.remove(i)
                print("Student deleted:", i)
                break
            else:
                print("student not found")
    else:
        print("exit")
        break

# students = []  # Use plural for clarity

# while True:
#     a = int(input('''        
#         1. Add student
#         2. Show all students
#         3. Search student
#         4. Delete student
#         5. Exit
#         Enter your choice: '''))
    
#     if a == 1:
#         b = int(input("How many students do you want to add: "))
#         for i in range(b):
#             adno = int(input("Enter admission number: "))
#             stdname = input("Enter student name: ")
#             age = int(input("Enter student age: "))
#             place = input("Enter student place: ")
#             students.append([adno, stdname, age, place])
#         print("Students added:", students)
        
#     elif a == 2:
#         print("All students:")
#         for student in students:
#             print(student)
    
#     elif a == 3:
#         adno = int(input("Enter admission number to search: "))
#         found = False
#         for student in students:
#             if student[0] == adno:  # Check if admission number matches
#                 print("Student found:", student)
#                 found = True
#                 break
#         if not found:
#             print("Student not found")

#     elif (a==4):
#         adno = int(input("Enter admission number to delete: "))
#         for student in students:
#             if student[0] == adno:  # Check if admission number matches
#                 students.remove(student)  # Remove the student from the list
#                 print("Student deleted:", student)
#                 break
#         else:
#             print("Student not found")
    
#     elif (a==5):
#         print("Exiting program.")
#         break
    
#     else:
#         print("Invalid choice, please try again.")


            


    