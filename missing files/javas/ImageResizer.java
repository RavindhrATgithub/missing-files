import java.io.File;
import java.io.IOException;
import java.util.Scanner;
import javax.imageio.ImageIO;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;

public class ImageResizer
{
    public static void main(String[] args) throws IOException 
    {  
        Scanner s=new Scanner(System.in);
        int dimension1, dimension2;
        System.out.println("Enter the Name of the file with Location :  Ex: 'C:\\Users\\documents\\image.png'");
        String location=s.nextLine();
        try
        { 

        File img= new File(location);
        BufferedImage image = ImageIO.read(img);  
        
        System.out.print("The Resolution of the picture is :  "+image.getWidth()+" x "+image.getHeight());  
        System.out.println("\nEnter The Dimensions to resize  ");
        System.out.print("Enter the dimension 1 : ");
        dimension1=s.nextInt();
        System.out.print("Enter the dimension 2 : ");
        dimension2=s.nextInt();
        BufferedImage resizedImage = new BufferedImage(dimension1,dimension2, BufferedImage.TYPE_INT_RGB);
        Graphics2D graphics2D = resizedImage.createGraphics();
    
        graphics2D.drawImage(image, 0, 0, dimension1, dimension2, null);
        graphics2D.dispose();

        File file=new File("C:\\Users\\PRABHU K\\Desktop\\nemp\\Resized_image.jpg");
   
        ImageIO.write(resizedImage, "jpg", file);
        
        System.out.println("The given resolution has been applied !");
        System.out.println("The location of the resized image is: "+file.getAbsolutePath()+"\n");
        s.close();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        
    }
   
}
