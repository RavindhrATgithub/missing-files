import java.util.Scanner;
public class MatrixRotation 
{

  public static void main(String args[])
  {
    int m;

    System.out.print("Enter the rows and columns of the matrix N and N");  
    Scanner sc=new Scanner(System.in);
    m=sc.nextInt();
 
    System.out.println("Draw the image\n");
    int matrix[][]=new int[m][m];
    
    for(int i=0;i<m;i++)
     {
        for(int j=0;j<m;j++)
        {
            matrix[i][j]=sc.nextInt();
            
        }
     } 

    int matrix2[][]=new int[m][m];
        for(int i=0;i<m;i++)
        {
           for(int j=0;j<m;j++)
           {
             matrix2[i][j]=matrix[j][i];
                
           }
           
        }
     


     System.out.println("The Matrix after the 90deg Rotation is : ");
     for(int i=0;i<m;i++)
     {
        for(int j=0;j<m;j++)
        {
           System.out.print(matrix2[i][j]+" ");
            
        }
        System.out.println();
     }
     

      sc.close();
  }





}
