// Get process.stdin as the standard input object.
let standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input an integer in the command line.");

// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if(data === 'exit\n'){
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    }else
    {
        let number = parseInt(data);

        //Take user input and return a list of all prime numbers between 0 and the user input
        console.log('List of all prime numbers between 0 and ' + data);
        for (let counter = 0; counter <= number; counter++) {

            let notPrime = false;
            for (let i = 2; i <= counter; i++) {
                if (counter%i===0 && i!==counter) {
                    notPrime = true;
                }
            }
            if (notPrime === false) {
                console.log(counter);
            }
        }
    }
});