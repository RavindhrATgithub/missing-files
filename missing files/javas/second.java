import java.util.Scanner;
//import java.io.IOError;

public class second{
  
    public static void main(String args[])
    {
     
         System.out.println("hello world");
         Scanner sc=new Scanner(System.in);
         int n;
         System.out.println("Enter the number: ");
         n=sc.nextInt();
         for(int i=0;i<n;i++){

            for(int j=0;j<n;j++){
                
                System.out.print(" * ");
            }
            System.out.println("");
           sc.close();
        }
      

    }





}