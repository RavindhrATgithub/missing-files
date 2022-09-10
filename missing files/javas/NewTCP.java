import java.io.IOException;
import java.net.InetAddress;
import java.net.Socket;
import java.net.UnknownHostException;

public class NewTCP{
 
     public static void main(String[] args) throws UnknownHostException, IOException {
        
        InetAddress ip=InetAddress.getByName("www.zoho.com");
    
        String IpAddress= ip.getHostAddress(); 

        long time1,time2;
       
        time1=java.time.LocalTime.now().getNano();
        Socket s=new Socket(IpAddress,80);
        
        if(s.isConnected())
        {
            time2=java.time.LocalTime.now().getNano();
            System.out.println("Time latency is : "+(time2-time1)+" NanoSeconds");
        }
        
        s.close();
     }

    
}
