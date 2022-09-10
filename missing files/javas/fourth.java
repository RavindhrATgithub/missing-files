import java.util.*;

public class fourth {
    public static void main(String args[])
{    HashMap<Integer,Integer> map=new HashMap<>();
     map.put(7,4);

    // System.out.println(map.replace(7,0));
     Scanner s= new Scanner(System.in);
     int a;
     System.out.println(" enter a =  ");
     a=s.nextInt();
     map.put(a, a);
     System.out.println(map.values());
    s.close();
}
}
