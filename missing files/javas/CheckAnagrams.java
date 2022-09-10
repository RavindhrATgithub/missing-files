import java.util.*;
public class CheckAnagrams {
    
  public static void main(String args[])
  {
    Scanner sc= new Scanner(System.in);
    String s;
    System.out.println("Enter the string: ");
    s=sc.nextLine();
    String sen;
    System.out.println("Enter the sentence: ");
    sen=sc.nextLine();
    boolean flag=false;
    boolean b[]=new boolean[s.length()];  
    
    for(int i=0;i<s.length();i++)
    b[i]=false;
    try{
    
    for(int i=0;i<s.length();i++)
    {
        for(int j=0;j<sen.length();j++)
        {
          if((s.charAt(i)==sen.charAt(j)||(s.charAt(i)+0)==(sen.charAt(j)+32)||(s.charAt(i)+0)==(sen.charAt(j)-32))&&(b[i]==false))
          b[i]=true;
         
        }

    }
    for(int i=0;i<s.length();i++)
    {

      if(b[i]==false)
      flag=true;
    }

    if(flag) {
      System.out.println("Not a anagrams");
    }
    else{
      System.out.println("It is an anagrams");
    }
  }
  catch(Exception e){

    System.out.println("Not an anagrams");
  }

   sc.close();
  }

}
