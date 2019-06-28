package test001; //Match the package name to the directory your java file is under
import java.util.Scanner; // Works similarly to Node.js' CLI Inquirer

public class testing {
    // Focus my attention to 'main' since it will take place
    // as the entry point to the application. Everything else will get nested inside this class.
    public static void main(String[] args) {
        String name = 'Rafael';
        int age = 23;
        double bankAccount = 174.88;
        boolean broke = true;
        boolean finStable = !true;

        //System.out works similar to console.log
        //String.format is like JS ES6 syntax of template literals but you use %s
        //println and print are methods used to log out messages
        Sytem.out.println(String.format('%s is %s years old b/c %s has %s in his bank account.', name, age, name, bankAccount));
        System.out.print("This string won't have a newline appended.");

        //Prompt users for input on the command line
        //First, create a new Scanner that read from the input stream
        Scanner input = new Scanner (System.in);

        //Collecting lots of text will require nextLine, meanwhile word inputs only use next
        System.out.println('Enter a mantra that you like to use.');
        String sentence = input.nextLine();

        System.out.println('What is your favorite word?');
        String favWord = input.next();

        //Collecting inetegers and doubles have their own input methods
        System.out.println('On a scale from 1-5, rate me');
        Int rate = input.nextint();

        System.out.println('Do you remember your GPA?');
        Double gpa = input.nextDouble();
    }
}

//First you must compiple. Try to run this command in the directory above where all your Java files are in
    //javac directoryName/*.java

// Second you run the command to test your code
    //java directoryName.fileName