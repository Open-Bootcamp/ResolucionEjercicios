package com.example;

import java.util.Scanner;

public class ejercicio2 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Introduce un numero: ");

        int numero = scanner.nextInt();

        double iva = numero * 0.21;

        double suma = numero + iva;

        System.out.println("El resultado con IVA es: " + suma);
    }
}
