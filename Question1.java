import java.util.ArrayList;
import java.util.List;

public class Question1 {

	/* 
   	 * A function that takes an integer n and returns a list of all prime between 0 and n.
     * The function takes one parameter n, which represents the end of the range.
   	 */
	public List<Integer> primeNumbers(int n) {
  		List<Integer> primeNumbersList = new ArrayList<Integer>();

  		for (int i = 0; i <= n; i++) {
    		boolean isPrime = true;

    		// If the number n is less than 2, then it is not a prime number. 
    		if (i < 2) isPrime = false;

    		for (int j = 2; j <= i / 2; j++) {
        		if (i % j == 0 && i != j) isPrime = false;
    		}

    		if (isPrime) primeNumbersList.add(i);
  		}

  		return primeNumbersList;
 	}
}

