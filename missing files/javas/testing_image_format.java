import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

public class testing_image_format {
    
    public static void main(String[] args) throws IOException {
        

        File inp=new File("c:\\users\\prabhu k\\desktop\\nemp\\ignore.png");
        BufferedImage img=ImageIO.read(new File("c:\\users\\prabhu k\\desktop\\nemp\\image.jpg"));
        try {
            ImageIO.write(img,"PNG",inp);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } 

    }
}
