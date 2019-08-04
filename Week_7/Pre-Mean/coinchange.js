// Coin Change

function coinChange(num) {
    

    var num_dollars = Math.floor(num/100);
    var num_quarters = Math.floor((num - (num_dollars * 100))/25);
    var num_dimes = Math.floor((num - (num_dollars * 100) - (num_quarters * 25))/10);
    var num_nickels = Math.floor((num - (num_dollars * 100) - (num_quarters * 25) - (num_dimes * 10))/5)
    var num_pennies = Math.floor(num - (num_dollars * 100) - (num_quarters * 25) - (num_dimes * 10) - (num_nickels * 5))

    var change = {
        "dollars" : num_dollars,
        "quarters" : num_quarters,
        "dimes" : num_dimes,
        "nickels" : num_nickels,
        "pennies" :num_pennies
    };
    
    // console.log("Dollars: " + change['dollars'] + " Quarters: " + change['quarters'])
    console.log(change)
}

coinChange(450)