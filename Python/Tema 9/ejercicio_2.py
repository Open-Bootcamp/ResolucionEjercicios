from functools import reduce

def ej2(lista): 
    resultado = list(filter((lambda x: x % 4), lista)) 
    print(resultado)
    resultado = reduce( (lambda x, y: x + y), resultado) 
    print(resultado)

lista = list(range(100))

ej2(lista)