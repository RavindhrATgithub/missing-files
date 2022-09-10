import java.io.*;

public class FileEx1 {

    public static void main(String[] args) {
        
    

    File file=new File("C:\\Users\\PRABHU K\\Desktop\\nemp");
    if(!file.exists())
    { 
        try {
            if(file.mkdir())
            System.out.println("Folder created successfully");
            String path=file.getPath();
            path+="\\file.txt";
            System.out.println(path);
            File file2=new File(path);
            if(file2.createNewFile())
            System.out.println("file named as file2 is created");
           System.out.println(  file2.length());
        } catch (Exception e) {
           
        }
          
    }
 
}
}
