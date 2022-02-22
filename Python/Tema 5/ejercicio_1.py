import math

def area_triangulo(altura: float, base: float) -> float:
    return ((altura*base)/2)

def area_circulo(radio: float) -> float:
    return (math.pi*(radio**2))

print(f"Área de triangulo: {area_triangulo(2,2)}")
print(f"Área del círculo: {area_circulo(4)}")