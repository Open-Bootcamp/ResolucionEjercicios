# Usaremos la función input("mensaje") para solicitar algo al usuario por consola
edad: int = input('Hola Usuario, introduce tu edad: ')

# lo que se obtiene desde input() es siempre un str, así que lo tenemos que convertir a un número entero -> int(edad)
if(int(edad) < 18):
    print('Eres menor de edad')
else:
    print('Eres Mayor de edad')