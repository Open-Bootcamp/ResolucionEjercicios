peso = input("¿Cuál es tu peso en kg? ") ## Pedimos el peso al usuario
estatura = input("¿Cuál es tu estatura en metros?") ## Pedimos la altura al usuario
imc = round(float(peso)/float(estatura)**2,2) ## Calculamos el índice de masa corporal
print("Tu índice de masa corporal es " + str(imc))