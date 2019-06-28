package test001;

import java.util.ArrayList;

public class ArrayList  {
    public static void main(String[] args) {
        ArrayList<String> theBoys = new ArrayList<>();
            theBoys.add('Ed');
            theBoys.add('Edd');
            theBoys.add('Eddy');
            theBoys.add('Plank');

        System.out.println(
            System.format('The strong boy is %s', theBoys.get(0));
        );
        System.out.println(
            System.format('The smart boy is %s', theBoys.get(1))
        );
        Sytem.out.println(
            System.format('The angry boy is %s', theBoys.get(2))
        );

        theBoys.set(3, 'Rolf'); //the .set method is used to rreplace a data value. Must set an index
        theBoys.remove(3); // the .remove method does as it says given the index

        // To iterate through your ArrayList perform this code
        for (String edBoy : theBoys) {
            System.out.println(String.format('This edBoy name is %s', edBoy));
        }
    }
}