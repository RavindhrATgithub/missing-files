
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Scanner;
import javax.imageio.ImageIO;

public class ImageCrop
{
 

    public static void main(String[] args) throws IOException 

    {

       
        Scanner s=new Scanner(System.in);
        int width, height;
        System.out.println("Enter the Name of the file with Location :  Ex: 'C:\\Users\\documents\\image.png'");
        String location=s.nextLine();
        System.out.print("\nEnter the height and width of the picture:  ");
        height=s.nextInt();
        width=s.nextInt();
        System.out.print("\nWant to add a frame to your image ! ( yes / no):  ");
        String flag;
        s.nextLine();
        int frame=0;
        flag=s.nextLine(); 
        if(flag.equals("yes"))
         {
            System.out.println("Enter the frame width :  ");
            frame=s.nextInt();
        }

        try
        { 

        File img= new File(location);
        Image image = ImageIO.read(img);    
        BufferedImage resizedImage = new BufferedImage(width,height, BufferedImage.TYPE_INT_RGB);
        Graphics2D graphics2D = resizedImage.createGraphics();
    
        graphics2D.drawImage(image, frame, frame, width-(2*frame), height-(2*frame), null);
        graphics2D.dispose();

        File file=new File("Resized_image.jpg");
   
        ImageIO.write(resizedImage, "jpg", file);
        
        System.out.println("Image resized successfully");
        System.out.println("The locatio of the resized image is: "+file.getAbsolutePath());
        s.close();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        
    }
}
