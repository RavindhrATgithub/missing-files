import java.util.*;
public class DifferenceNumInArray {


    public static void main(String args[]){

         int a[];
         int n;
         Scanner sc= new Scanner(System.in);
         System.out.print("Enter the no of elements in the array: ");
         n=sc.nextInt();
         a=new int[n];
         System.out.println("Enter the elements : ");
         int diff=100000,pos=0;
         for(int i=0;i<n-1;i++)
         {
               a[i]=sc.nextInt();
               int differ=a[i]-a[i+1];
               if(differ<diff){
               diff=differ;
               pos=i;
               }
         }
  
          System.out.println(pos);
          sc.close();


    }
    
}
