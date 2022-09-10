//import java.util.*;
 
    public class Third{

     public  static class Name{

     public String name;
     public void setName(String n){
        name=n;
     }
     public String displayName(){
        return name;
     }

    }
 
  public static void main(String args[]){


    Name obj= new Name();
    obj.setName("ravi");
    System.out.print(obj.displayName());
  }




}