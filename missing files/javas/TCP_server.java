import java.net.*;  
import java.io.*;  

public class TCP_server {  
public static void main(String args[])throws Exception{  


    ServerSocket ss=new ServerSocket(100);  
    Socket s=ss.accept();  
    DataInputStream din=new DataInputStream(s.getInputStream());  
    DataOutputStream dout=new DataOutputStream(s.getOutputStream());  
    String str="";  
    while(!str.equals("stop"))
    {  
      str=din.readUTF();  
      System.out.println("client says: "+str);  
      dout.writeUTF(str);  
      dout.flush();  
    }  
    din.close();  
    s.close();  
    ss.close();  
   
}}  

