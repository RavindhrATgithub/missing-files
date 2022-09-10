import java.io.File;
import java.util.Scanner;

import javax.imageio.ImageIO;


import java.awt.image.BufferedImage;

public class imageFormatChange 
{
     public static void main(String[] args) {
          
     
      try 
      {
          System.out.println("Enter the file name with format (test.jpg) :");
          Scanner s=new Scanner(System.in);
       
          String filename=s.nextLine();
             
          File fin=new File("C:\\Users\\PRABHU K\\Desktop\\nemp\\"+filename);    

          System.out.println("Enter the format to convert( Ex:  PNG , JPEG, JPG)");
          String imgFormat= s.nextLine();
          File  fout=new File("C:\\Users\\PRABHU K\\Desktop\\nemp\\NewFormat."+imgFormat);
       
          System.out.println("The file has been converted to the given format ");
          
          BufferedImage bim=ImageIO.read(fin);
          ImageIO.write(bim, imgFormat, fout);

       
          s.close();     
     
     } 
      catch (Exception e) 
      {
        e.printStackTrace();       
      }


     }    
}
