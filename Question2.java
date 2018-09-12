import java.util.ArrayList;
import java.util.List;

public class Question2 {

	public List<Integer> factorial(int n) {
        List<Integer> factorialList = new ArrayList<Integer>();

        int fact = 1;
        for (int i = 0; i <= n; i++) {
            if (i == 0) {
                fact = 1;
                factorialList.add(fact);
            } else {
                fact = fact * i;
                factorialList.add(fact);
            }
        }

        return factorialList;
    }
}
