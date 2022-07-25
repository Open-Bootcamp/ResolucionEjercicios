def numeroprimo():
  numero: int = int(input('Introduce un número entero: '))

  if numero > 1:
    # Buscamos los factores de número
    for i in range(2,int(numero)):
        if (int(numero) % i) == 0:
            print(f"Lo siento, el número {numero} NO ES PRIMO. Es divisible entre {i}")
            break
        else:
            print(f"¡ENHORABUENA!, el número {numero} ES PRIMO")
  else:
    print(f"Lo siento, el número {numero} NO ES PRIMO. Los números primos son mayores que 1")

print({numeroprimo()})

#Este programa genera un conflicto a la hora de ingresar cualquier número que sea divisible por un número diferente a 2. 
#Es por eso que he creado un par de soluciones alternas de la siguiente manera:

def numeroprimo():
    numero: int = int(input('Introduce un número entero: '))

    if numero > 1:
        # Buscamos los factores de número
        for i in range(2,int(numero)):
            if (int(numero) % i) == 0:
                print(f"Lo siento, el número {numero} NO ES PRIMO. Es divisible entre {i}")
                # Aquí he cambiado el break por un return ya que el break lo que hace es romper el condicional y continúa con la ejecución del programa,
                # Pero lo que se busca es que si en algún momento encuentra que es divisible por otro número, diga que no es primo y finalice.
                return
         #En esta parte he sacado el print dentro del else para que si el condicional en ningún momento es True, diga que Sí es primo
        print(f"¡ENHORABUENA!, el número {numero} ES PRIMO")
    else:
        print(f"Lo siento, el número {numero} NO ES PRIMO. Los números primos son mayores que 1")

print({numeroprimo()})



##Adicional he agregado mi solución para que puedan ver otro punto de vista:

def num_primo():
    numero = int(input("Ingrese un número entero: "))
    contador = 0 
    if numero > 1:
        for x in range(2,numero): #Empieza a repetir Y OJO range funciona desde (2,num] o sea excluye el último  número así que haría las iteraciones así (2,3,4,num-1)
            if numero % x == 0:
                contador += 1 #Si en algún momento es divisible por un número entre 2 y el número,me sum quiere decir que NO ES PRIMO
                if contador == 1: #Así que aquí evalúo que si en algún momento es divisible por otro número. Imprima y retorne
                    return f"Número {numero} no es Primo"
        return f"Número {numero} es Primo" # Y si después de haber recorrido el for no se ha roto, quiere decír que SÍ ES PRIMO
    else:
        return "Número debe ser mayor a cero"

print(num_primo())
