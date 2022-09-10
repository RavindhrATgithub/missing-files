import java.util.*;
public class ByteConversion {
    
  public static void main(String args[]){


    Scanner sc=new Scanner(System.in);
    System.out.print("Enter the No of Bytes: ");
    long num;
    num=sc.nextLong();
    if(num >= 1000)
    {
        if(num >=1000000)
         { 
            if(num>=1000000000)
            {
                long f=num%1000000000;
                System.out.println(num/1000000000+"."+f+" Gbytes");

            }
            else
            {
            int f=(int)num%1000000;

            System.out.println(num/1000000+"."+f+" MBytes");
            }


         }

         else{
            
            int f=(int)num%1000;
            System.out.println(num/1000+"."+f+" KBytes");
         }

    }
    else
    {
        System.out.println(num+".0 Byte");
    }

    sc.close();


  }


}
