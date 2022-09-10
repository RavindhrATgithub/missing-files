import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;

import java.io.FileOutputStream;
import java.io.IOException;


public class imageBuffering 
{
   public static void main(String[] args) throws IOException 
   {
     BufferedInputStream br=new BufferedInputStream(new FileInputStream( "C:\\Users\\PRABHU K\\Desktop\\image.jpg"));
     BufferedOutputStream bout=new BufferedOutputStream(new FileOutputStream("new2.jpg"));
     int r=br.read();
     while(r!=-1)
     {
          bout.write(r);
        
         r=br.read(); 
        
     }
       
     bout.flush();
     bout.close(); 
     br.close();


   }

    
}
