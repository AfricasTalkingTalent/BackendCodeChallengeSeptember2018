public class Question3 {
	/*
     * Match a case of type Int, String and float
     */
	public boolean equals(Object o) {
        if (o instanceof Integer) {
            return true;
        } else if (o instanceof String) {
            return true;
        } else if (o instanceof Float) {
            return true;
        }

        return false;
    }
}
