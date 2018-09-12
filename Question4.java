public String containsNumber(String s) {
	String result = null;
    
	if (s.matches(".*\\d+.*")) {
    	result = s.replaceAll("\\D+", "");
    }

    return "Some(" + result + ")";
}
