items = input("Introduce países separados por comas:\n")

paises = [pais for pais in items.split(",")]

print(",".join(sorted(list(set(paises)))))