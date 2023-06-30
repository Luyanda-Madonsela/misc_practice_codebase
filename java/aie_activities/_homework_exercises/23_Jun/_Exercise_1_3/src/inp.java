import java.util.Scanner;
public class inp {
    public static void main(String[] args) {
//        Declaring the variables.
        String name;
        String lastName;
        int age;
        Scanner scanner = new Scanner(System.in);
//        Reading in information from user
        System.out.println("Enter your name:");
        name = scanner.nextLine();
        System.out.println("Enter your last name:");
        lastName = scanner.nextLine();
        System.out.println("Enter your age:");
        age = scanner.nextInt();
//        Printing message
        System.out.println("Good Day: "+name+" "+lastName+" you are "+age+" years old.");

    }
}