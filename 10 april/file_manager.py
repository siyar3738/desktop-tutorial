# x=89
# y=56
# z=x+y
# print(z)



# x=["apple","banana","pinapple","mango","watermalon","kiwi","papaya"]
# print(x[3])


# import os
# import shutil

# def sort_files(folder_path):
#     if not os.path.exists(folder_path):
#         print("Folder does not exist!")
#         return

#     for file in os.listdir(folder_path):
#         file_path = os.path.join(folder_path, file)

#         # ✅ Skip folders
#         if not os.path.isfile(file_path):
#             continue

#         # ✅ Skip files without extension
#         if "." not in file:
#             continue

#         extension = file.split('.')[-1].lower()
#         ext_folder = os.path.join(folder_path, extension.upper())

#         if not os.path.exists(ext_folder):
#             os.makedirs(ext_folder)

#         dest_path = os.path.join(ext_folder, file)

#         try:
#             shutil.move(file_path, dest_path)
#         except PermissionError:
#             print(f"❌ File in use: {file}")
#         except Exception as e:
#             print(f"❌ Error moving {file}: {e}")

#     print("✅ Done sorting!")

# folder_path = input("Enter folder path: ")
# sort_files(folder_path)






# import webbrowser

# chrome_path = "C:/Program Files/Google/Chrome/Application/chrome.exe %s"

# search = "Taarak Mehta Ka Ooltah Chashmah"
# url = f"https://www.youtube.com/results?search_query={search}"

# webbrowser.get(chrome_path).open(url)




