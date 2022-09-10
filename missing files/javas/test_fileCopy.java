import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class test_fileCopy {
    
    public static void main(String[] args) throws IOException {
        
        File input=new File("C:\\users\\prabhu k\\desktop\\nemp\\image.jpg");
        File output=new File("C:\\users\\prabhu k\\desktop\\nemp\\testing1.jpg");
        BufferedInputStream bin=new BufferedInputStream(new FileInputStream(input));
        BufferedOutputStream bout=new BufferedOutputStream(new FileOutputStream(output));
        int oneByte;
        oneByte=bin.read();
        while(oneByte!=-1)
        {
            bout.write(oneByte);
            oneByte=bin.read();
        }

        System.out.println("the file size is: "+output.length()/1024+" Kilo Bytes");
        System.out.println(input.getAbsolutePath());
        System.out.println(input.getParentFile());
        System.out.println(input.getCanonicalPath());
        System.out.println("The difference between Absolute path and the Canonical path is the name "
        +"which is accurate at canonical path");

        
        bin.close();
        bout.close();

       
    }
}
