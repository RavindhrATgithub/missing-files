import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class ImageCopy {

    public static void main(String[] args) throws IOException {
         
       File originalFile = new File("C:\\Users\\PRABHU K\\Desktop\\thari_image.jpg");
       File copyFile = new File("C:\\Users\\PRABHU K\\Desktop\\nemp\\copied_image.jpg");
       BufferedInputStream bis= new BufferedInputStream(new FileInputStream(originalFile));
       BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(copyFile));
       byte buff[] =new byte[(int)originalFile.length()];
       if(copyFile.exists()){
       
      
       bis.read(buff, 0, (int)originalFile.length());
       bos.write(buff);

       copyFile.setWritable(true);

       }
       else{

        System.out.println("The mentioned file is already exists!");
       }
       
       
        
       bis.close();
       bos.close();
    }
    
}
