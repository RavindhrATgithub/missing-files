import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Scanner;
//import java.io.
public class FileEx2 {
    public static void main(String[] args) throws IOException {
        
        File file=new File("C:\\Users\\PRABHU K\\Desktop\\nemp");
        System.out.println("");
        
        File newFile =new File(file,"file.txt");
        newFile.createNewFile();
        FileInputStream ins=new FileInputStream(newFile);
 
        

        try (BufferedInputStream bis = new BufferedInputStream(ins)) {

            
            byte rb[]=new byte[(int)newFile.length()];
            bis.read(rb, 0, (int)newFile.length());
            System.out.println("Number of bytes in the files "+(int)newFile.length());
            for(byte i:rb){

                System.out.print(""+(char)i);
            }
        }
        System.out.println();
        BufferedOutputStream bos= new BufferedOutputStream(new FileOutputStream(newFile, true));

        String wb=new String();
        System.out.println("Enter the String to write in to the file: ");
        Scanner s=new Scanner(System.in);
        
        wb= s.nextLine();
        bos.write(wb.getBytes());
        bos.flush();       

     //   System.out.println(newFile.getParent());
        bos.close();

      
        s.close();
  
    }
}
