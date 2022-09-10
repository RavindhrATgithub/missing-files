
import java.util.Scanner;
public class MatrixElementReplace 
{

  public static void main(String args[])
  {
    int m,n;

    System.out.print("Enter the rows and columns of the matrix M and N");  
    Scanner sc=new Scanner(System.in);
    m=sc.nextInt();
    n=sc.nextInt();
    System.out.println("Enter the elements\n");
    int matrix[][]=new int[m][n];
    int temp=0;
    for(int i=0;i<m;i++)
     {
        for(int j=0;j<n;j++)
        {
            matrix[i][j]=sc.nextInt();
            if(matrix[i][j]==0)
            temp=1;
        }
     } 

     if(temp==1)
     {
     for(int i=0;i<m;i++)
     {
        for(int j=0;j<n;j++)
        {
           System.out.print(" 0 ");
            
        }
        System.out.println("\n");
     }
     }

      sc.close();
  }

}
