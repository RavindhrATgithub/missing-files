import java.util.Scanner;

public class numberReverse {
    
  public static void main(String args[])
  
  {
  System.out.println("Enter a number : ");
  int n;
  Scanner sc=new Scanner(System.in);
  n=sc.nextInt();
  for(int i=n;i>0;)
  {
    int t=i%10;
    System.out.print(t);
    i/=10;
  }


  sc.close();
  }
  



}
