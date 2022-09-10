import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.Socket;
import java.util.Scanner;

public class TCP_Client{

    public static void main(String[] args) {
        
    Scanner sc=new Scanner(System.in);
     try{           
          Socket s=new Socket("localhost",100);  
          DataInputStream din=new DataInputStream(s.getInputStream());  
          DataOutputStream dout=new DataOutputStream(s.getOutputStream());  
          BufferedReader br=new BufferedReader(new InputStreamReader(System.in));  
  
         String packet1="",packet2="";  
         long time1,time2,elapsedTime; 
         System.out.print("Enter: ");
         packet1=sc.nextLine();
         dout.writeUTF(packet1); 
         time1=java.time.LocalTime.now().getNano();
         while(!packet1.equals("stop"))
         {  
          packet2=din.readUTF();
          time2=java.time.LocalTime.now().getNano();  
          elapsedTime=(time2-time1);
             System.out.println("\nThe Time latency is : "+elapsedTime+" Nano Seconds\n"); 
             System.out.println("Server Replies: "+packet1);
             System.out.print("Enter: ");  
             packet1=br.readLine(); 
          time1=java.time.LocalTime.now().getNano(); 
          dout.writeUTF(packet1);  
          dout.flush();
          s.close();
        }  
            }catch(Exception e){System.out.println(e);}  
            
            sc.close();
    }
     
    
}
