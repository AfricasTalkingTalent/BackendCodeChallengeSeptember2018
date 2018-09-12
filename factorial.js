function FirstFactorial(num) { 

    let factorial = 1;
  
    for (let i = 1; i <= num; i++) {  
      factorial = factorial * i;
    }
  
    console.log(factorial);
           
  }
     
  //Get process.stdin as the standard input object.
    let standard_input = process.stdin;

    // Set input character encoding.
    standard_input.setEncoding('utf-8');

    // Prompt user to input data in console.
    console.log("Please input an integer: ");

    // When user inputs data and click enter key.
    standard_input.on('data', function (data) {

        // User input exit.
        if(data === 'exit\n'){
            // Program exit.
            console.log("User input complete, program exit.");
            process.exit();
        }else
        {
            //return a List of all the factorials of the numbers between 0 and user input
            let number = parseInt(data);
            for (let counter = 0; counter <= number; counter++) {
                FirstFactorial(counter);
            }
        }
    });    