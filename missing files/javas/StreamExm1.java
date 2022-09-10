import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class StreamExm1 {

    public static void main(String[] args) throws IOException {
        
        File mainFile= new File("C:\\Users\\PRABHU K\\Desktop\\nemp");
        
        File file=new File(mainFile, "file.rvt");

        try 
        {
            file.createNewFile();
        } 
        catch (IOException e) 
        {
         
            e.printStackTrace();
        }
        
        try {
            try (BufferedOutputStream fs = new BufferedOutputStream(new FileOutputStream(file,true))) {
                byte o=10;
                fs.write(o);
            }
       
        } catch (FileNotFoundException e) {
            
            e.printStackTrace();
        }



    }
    
}
