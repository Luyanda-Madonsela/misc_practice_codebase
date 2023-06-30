import java.util.Scanner;
import java.util.*;
public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);//        Creating the scanner object
        System.out.println("Hello world!");
        int myAge;
        String myName;
        String mySurname;
        System.out.println("Please enter your name: ");
        myName = scanner.nextLine();
        System.out.println("Please enter your surname: ");
        mySurname = scanner.nextLine();
        System.out.println("Please enter your age: ");
        myAge = scanner.nextInt();

        if (myAge<35) {
            System.out.println("You are still young ");
        } else if (myAge>35) {
            System.out.println("You are mature now ");
        }

//        Concatenated String:
        System.out.println("Pleasure to meet you "+myName+" "+mySurname+", you are "+myAge+".");

//        Formatted String:
//        %s-String, %d-Decimal integer, %f-Floating point, %c-Character, %%-Literal percent sign
        String formattedString = String.format("Pleasure to meet you %s %s. You are %d.", myName, mySurname, myAge);
        System.out.println(formattedString);


        System.out.println("---------------------------------------------------------------");

//        ------------------------------------------------------------------------------------------------------------
//        Same code as above, but using Methods.

        printGreeting(myName,mySurname,myAge);

    }

    public static String ageMessage(int age){
        if (age<35) {
            return "You are still young ";
        } else if (age>35) {
            return "You are mature now ";
        }
        return null;
    }

    public static void printGreeting(String name,String surname,int age){
        System.out.println("Pleasure to meet you "+name+" "+surname+", you are "+age+".");
        System.out.println(ageMessage(age));
    }


}
