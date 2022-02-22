file = open('mi_primer_archivo.txt', 'w')
file.write('¡He creado mi primer archivo!\n')
file.close()

file = open('mi_primer_archivo.txt', 'r+')
file.readline()
file.write('Esta es la segunda vez que escribo.\n')

file.seek(0)
print(file.read())
file.close()