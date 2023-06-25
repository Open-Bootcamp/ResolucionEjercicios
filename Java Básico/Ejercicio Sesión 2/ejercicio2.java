import java.util.Scanner;
//Para este ejercicio tendréis que crear una función que reciba un precio y devuelva el precio con el IVA incluido.
public class Ejercicio2 {
    public static void main(String[] args) {
        System.out.println("El resultado con IVA es: "+calculariva());
    }

    private static double calculariva() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Introduce un numero: ");

        int numero = scanner.nextInt();

        double iva = numero * 0.21;

        return numero + iva;
    }
}
