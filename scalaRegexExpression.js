function testFn(testString){
    //test if the string contains an integer
    let matches = testString.match(/\d+/g);
    if (matches != null) {
        console.log('This string contains the number 7');
    }else{
        console.log('The number 7 was not found in this string');
    }
}
testFn('7th floor Galana plaza, Kilimani');