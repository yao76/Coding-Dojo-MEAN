// modulus operator practice

function fizzbuzz(n) {
    var result = "";

    if ( n <= 0 ){
        console.log("Parameter must be a postive number!");
        return null;
    }

    if(isNaN(n)){
        console.log("Parameter entered was not a number!");
    }

    for (var i = 1; i <= n; i++) {
        if ( i % 3 == 0 && i % 5 == 0) {
            if (i == n) {
                result += "and FizzBuzz"
            }
            else {
                result += "FizzBuzz, ";
            }
        }
        else if ( i % 3 == 0) {
            if (i == n) {
                result += "and Fizz"
            }
            else {
                result += "Fizz, ";
            }
        }

        else if ( i % 5 == 0 ) {
            if (i == n) {
                result += "and Buzz"
            }
            else {
                result += "Buzz, ";
            }
        }
        
        else {
            if (i == n) {
                result += "and" + i
            }

            else {
                result += i + ", ";
            }
        }
    }

    return result;
}

console.log(fizzbuzz(10))