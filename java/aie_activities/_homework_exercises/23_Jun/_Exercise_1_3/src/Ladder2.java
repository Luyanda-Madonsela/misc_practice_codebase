import java.util.Scanner;
public class Ladder2 {
    public static void main(String[] args) {
        int number;
        Scanner scanner = new Scanner(System.in);

        System.out.println("Please enter your number:");
        number = scanner.nextInt();

        if (number>0){
            System.out.println("Number is Positive");
        }
        else if (number<0) {
            System.out.println("Number is Negative");
        }
        else {
            System.out.println("Number is Zero");
        }

    }

}
